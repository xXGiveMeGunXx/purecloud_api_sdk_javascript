/**
* @class
* @example
* var api = new VoicemailApi(pureCloudSession);
*/
var VoicemailApi = function (pureCloudSession) {
	/**
     * @summary Get a user's voicemail policy
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} userId - User ID
	*/
	function getUservoicemailpoliciesUser(userId){
		var apipath = '/api/v1/configuration/uservoicemailpolicies/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUservoicemailpoliciesUser = getUservoicemailpoliciesUser;
	/**
     * @summary Update a user's voicemail policy
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} userId - User ID
	* @param {} body - The user's voicemail policy
	 * @example
	 * Body Example:
	 * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "minimumRecordingTimeSeconds": 0,
   "maximumRecordingTimeSeconds": 0,
   "unavailableMessageUri": "",
   "namePromptMessageUri": "",
   "fullMessageUri": "",
   "pin": "",
   "quotaSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": ""
}
	*/
	function patchUservoicemailpoliciesUser(userId, body){
		var apipath = '/api/v1/configuration/uservoicemailpolicies/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUservoicemailpoliciesUser = patchUservoicemailpoliciesUser;
	/**
     * @summary Get a policy
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function getVoicemailpolicy(){
		var apipath = '/api/v1/configuration/voicemailpolicy';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoicemailpolicy = getVoicemailpolicy;
	/**
     * @summary Update a policy
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "enabled": true,
   "retentionTimeDays": 0,
   "alertTimeoutSeconds": 0,
   "minimumRecordingTimeSeconds": 0,
   "maximumRecordingTimeSeconds": 0,
   "unavailableMessageUri": "",
   "namePromptMessageUri": "",
   "fullMessageUri": "",
   "compressSilence": true,
   "pinConfiguration": {
      "minimumLength": 0,
      "maximumLength": 0
   },
   "quotaSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "voicemailExtension": "",
   "pinRequired": true
}
	*/
	function updateVoicemailpolicy(body){
		var apipath = '/api/v1/configuration/voicemailpolicy';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateVoicemailpolicy = updateVoicemailpolicy;
	/**
     * @summary Get mailbox information
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function getMailbox(){
		var apipath = '/api/v1/voicemail/mailbox';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMailbox = getMailbox;
	/**
     * @summary List voicemail messages
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function getMessages(){
		var apipath = '/api/v1/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessages = getMessages;
	/**
     * @summary Delete all voicemail messages
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function deleteMessages(){
		var apipath = '/api/v1/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMessages = deleteMessages;
	/**
     * @summary Get message.
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	*/
	function getMessage(messageId){
		var apipath = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessage = getMessage;
	/**
     * @summary Update a message.
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	* @param {} body - VoicemailMessage
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "read": true,
   "audioRecordingDurationSeconds": 0,
   "audioRecordingSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "callerAddress": "",
   "callerName": "",
   "callerUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "selfUri": ""
}
	*/
	function updateMessage(messageId, body){
		var apipath = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateMessage = updateMessage;
	/**
     * @summary Delete a message.
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	*/
	function deleteMessage(messageId){
		var apipath = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMessage = deleteMessage;
	/**
     * @summary Get media playback URI for this message
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getMessageMedia(messageId, formatId){
		var apipath = '/api/v1/voicemail/messages/{messageId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessageMedia = getMessageMedia;

    return self;
};
