/**
* @class
* @example
* var api = new DownloadsApi(pureCloudSession);
*/
var DownloadsApi = function (pureCloudSession) {
	/**
     * @summary OAuth Callback used during code authorization grant flow.
	 * @description 
	 * @memberOf DownloadsApi#
	* @param {string} code - 
	* @param {string} state - 
	*/
	function getCallback(code, state){
		var apipath = '/api/v1/downloads/callback';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(code !== undefined && code !== null){
			queryParameters.code = code;
		}


		if(state !== undefined && state !== null){
			queryParameters.state = state;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallback = getCallback;
	/**
     * @summary Issues a redirect to a signed secure download URL for specified download
	 * @description this method will issue a redirect to the url to the content
	 * @memberOf DownloadsApi#
	* @param {string} downloadId - Download ID
	* @param {string} contentDisposition - this method will issue a redirect to the url to the content
	*/
	function getDownload(downloadId, contentDisposition){
		var apipath = '/api/v1/downloads/{downloadId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{downloadId}', downloadId);

        if(downloadId === undefined && downloadId !== null){
			throw 'Missing required  parameter: downloadId';
        }


		if(contentDisposition !== undefined && contentDisposition !== null){
			queryParameters.contentDisposition = contentDisposition;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDownload = getDownload;

    return self;
};
