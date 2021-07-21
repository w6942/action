
(function() {
	var spec = {
		name : "visca",
		description : "会议摄像头",
		portType : "UART",
		attrs : [],
		tags : [],
		operations : [],
		autoReport : {
			responseLen : 0,
			description : "",
			params : [],
			parseResponse : function(responseHex) {
				return {
					results : [],
					success : false,
					description : ""
				};
			}
		},
		protocol : "RS485",
		duplex : "FULL",
		speed : 9600,
		databits : 8,
		stopbits : 1.0,
		checkMode : "NONE"
	};
	
	spec.attrs[0] = {
		name : "lastCommandCode",
		description : "last command code",
		type : "string",
		reportProgress : false,
		queryMethod : "",
		updateMethod : "",
		storable : true,
		defaultValue : null
	};
	
	spec.operations[0] = {
		name : "command",
		description : "command",
		params : [ {
			name : "code",
			description : "command code",
			type : "string",
			required : true
		} ],
		parseRequest : function(code) {
			
			var commandCode =  code.replace(/\s+/g,"");
			
			return {
				data : commandCode,
				responseLen : 0,
				description : "pass through command code"
			};
		},
		parseResponse : function(requestHex, responseHex) {
			return {
				results : [ {
					name : "lastCommandCode",
					value : requestHex,
					description : "last command code",
					storable : true
				} ],
				success : true,
				description : "last command code"
			};
		}
	};
	
	return spec;
})();