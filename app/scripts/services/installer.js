'use strict';

angular.module('installerSpaApp')
//
.service('$installer',function($http, $httpParamSerializerJQLike) {
    
    function installApplication(data){
	return $http({
	    url: '/api/v1/run/install',
	    method: 'POST',
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	    data: $httpParamSerializerJQLike(data),
	});
    }
    
    return {
	install: installApplication
    };
});
