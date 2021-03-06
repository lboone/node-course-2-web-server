/*
 * Create and export configuration variables
 *
 */

// General container for all the environments
var environments = {};

// Staging (default) environment
environments.staging = {
	'httpPort': 4000,
	'httpsPort' : 4001,
	'envName' : 'staging',
	'hashingSecret' : 'Yjnoj16QqMvPk7j58WM7BOTOKZJIHVA7UlS4gqFWdEy7SOgmYpSE11uA4ma20PyCkK8cBLyNFEsVnNKIght6VsKLt4DfJWgKZLbq6pycluegTnYi6wv09RIFALqeHPC4',
	'possibleTokenCharacters' : 'abcdefghijklmnopqrstuvwxyz0123456789',
	'defaultTokenStringLength' : 30,
	'google' : {
    	'apiKey' : 'AIzaSyBxn-jMNoIEWljjeFDUQamF58uWCUQvrOE',
	},
	'forecastIO' : {
		'apiKey' : '9e2a3dc99a61f5c1d9fb2782555e1ac5'
	}  
};

// Testing environment
environments.testing = {
	'httpPort': 6000,
	'httpsPort' : 6001,
	'envName' : 'testing',
	'hashingSecret' : 'Yjnoj16QqMvPk7j58WM7BOTOKZJIHVA7UlS4gqFWdEy7SOgmYpSE11uA4ma20PyCkK8cBLyNFEsVnNKIght6VsKLt4DfJWgKZLbq6pycluegTnYi6wv09RIFALqeHPC4',
	'possibleTokenCharacters' : 'abcdefghijklmnopqrstuvwxyz0123456789',
	'defaultTokenStringLength' : 30,
	'google' : {
    	'apiKey' : 'AIzaSyBxn-jMNoIEWljjeFDUQamF58uWCUQvrOE',
	},
	'forecastIO' : {
		'apiKey' : '9e2a3dc99a61f5c1d9fb2782555e1ac5'
	}  
};

// Production environment
environments.production = {
	'httpPort' : 5000,
	'httpsPort' : 5001,
	'envName' : 'production',
	'hashingSecret' : 'Yjnoj16QqMvPk7j58WM7BOTOKZJIHVA7UlS4gqFWdEy7SOgmYpSE11uA4ma20PyCkK8cBLyNFEsVnNKIght6VsKLt4DfJWgKZLbq6pycluegTnYi6wv09RIFALqeHPC4',
	'possibleTokenCharacters' : 'abcdefghijklmnopqrstuvwxyz0123456789',
	'defaultTokenStringLength' : 30,
	'google' : {
    	'apiKey' : 'AIzaSyBxn-jMNoIEWljjeFDUQamF58uWCUQvrOE',
	},
	'forecastIO' : {
		'apiKey' : '9e2a3dc99a61f5c1d9fb2782555e1ac5'
	}  
};

// Determine which environment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to staging

var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module

module.exports = environmentToExport;