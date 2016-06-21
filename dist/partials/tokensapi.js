/**
* @class
* @example
* var api = new TokensApi(pureCloudSession);
*/
function TokensApi(session) {
    if(!(this instanceof TokensApi)) {
        return new TokensApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('TokensApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Delete  auth token used to make the request.
  * @memberOf TokensApi#
  */
TokensApi.prototype.deleteMe = function deleteMe(){
    var requestPath = '/api/v2/tokens/me';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


