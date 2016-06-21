//API VERSION - 0.49.1
/**
  * @description With the PureCloud Platform API, you can control all aspects of your PureCloud environment. With the APIs you can access the system configuration, manage conversations and more.
  * @class
  * @param  {string} environment (Optional) The environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.com.au, etc.
  **/
function PureCloudSession(options) {
    if(!(this instanceof PureCloudSession)) {
        return new PureCloudSession(options);
    }

    this.options = options || {};
    this.setEnvironment(this.options.environment);
}

PureCloudSession.prototype.setEnvironment = function setEnvironment(env) {
    this.options.environment = env || 'mypurecloud.com';
    this.apiUrl = 'https://api.' + this.options.environment;
    this.authUrl = 'https://login.' + this.options.environment;
}

PureCloudSession.prototype.login = function login() {
  if(this.options.token) return Promise.resolve();
  var strategy = this.options.strategy;
  switch(strategy) {
    case 'oauth':
      var clientId = this.options.clientId;
      var redirectUrl = this.options.redirectUrl;
      var state = this.options.state;
      return this.loginWithOauth(clientId, redirectUrl, state);
    case 'basic':
      var username = options.username;
      var password = options.password;
      return this.loginWithBasicAuth(username, password);
    default:
      throw new Error('Authentication strategy "'+strategy+'" is not supported.');  
  }
}

PureCloudSession.prototype.loginWithOauth = function(clientId, redirectUrl, state) {
    var self = this;
    var checkUrl = this.apiUrl + "/api/v2/users/me?expand=organization";
    this._setHashValues();
    return makeRequest('get', checkUrl).catch(function(error) {
        var query = {
            response_type: 'token',
            client_id: encodeURIComponent(clientId),
            redirect_uri: encodeURI(redirectUrl),
            state: state
        };

        function qs(url, key) {
            var val = query[key];
            if(!val) return url;
            return url + '&' + key + '=' + val;
        }

        var url = Object.keys(query).reduce(qs, this.authUrl + '/authorize?');
        window.location.replace(url);
    });
}

PureCloudSession.prototype._setHashValues = function setHashValues() {
    if(!(typeof window !== 'undefined' && window.location.hash)) return;
    var hash = window.location.hash
        .slice(1).split('&')
        .reduce(function(obj, pair) {
            keyValue = pair.split('=');              
            obj[keyValue[0]] = keyValue[1];
            return obj;
        }, {});

    if(hash.access_token) this.options.token = hash.access_token;
    if(hash.state) this.options.state = hash.state;
}

PureCloudSession.prototype.loginWithBasicAuth = function(username, password) {
    var self = this;
    var url = this.authUrl + '/token';
    var data = {grant_type: 'client_credentials'};
    var timeout = 1000;

    return new Promise(function(resolve, reject) {
        superagent
            .post(url)
            .auth(username, password)
            .send(data)
            .timeout(timeout)
            .end(function(error, res) {
                if(error) return reject(error);
                if(!res.ok) return reject(res);
                self.options.token = res.body.access_token;
                resolve();
            });
    });
}

PureCloudSession.prototype.logout = function logout() {
		window.location.replace(this.authUrl + "/logout");
}

PureCloudSession.prototype.makeRequest = function makeRequest(method, url, query, data) {
    var self = this;
    return this.login().then(function() {
        method = method.toLowerCase();
        if(url.charAt(0) === '/') url = self.apiUrl + url;
        
        var bearer = 'bearer ' + self.options.token;
        var userAgent = 'PureCloud SDK/Javascript 0.49.1';
        var timeout = 2000;

        return new Promise(function(resolve, reject) {
            superagent[method](url)
                .type('json')
                .accept('json')
                .set('Authorization', bearer)
                .set('User-Agent', userAgent)
                .timeout(timeout)
                .query(query)
                .send(data)
                .end(function(error, res) {
                    if(error) return reject(error);
                    if(!res.ok) return reject(res);
                    resolve(res.body);
                });
        });
    });
}
