'use strict';

angular.module('installerSpaApp')
/**
 * @ngdoc controller
 * @name installerSpaApp.controller:AboutCtrl
 * @description # InstallCtrl Controller of the installerSpaApp
 */
.controller('InstallCtrl', function($scope, $installer) {

    function install() {
	$scope.ctrl.working = true;
	$scope.config.apps = [];
	$scope.config.modules.forEach(function(item){
	    $scope.config.apps.push(item.id);
	});
	return $installer.install($scope.config)//
	.then(function(){
	    // TODO reload page
	    alert('Installation complete, refreash the page.');
	}, function(error){
	    alert(error.data.message);
	})
	.finally(function(){
	    $scope.ctrl.working = false;
	});
    }

    $scope.install = install;
})

/**
 * 
 */
.controller('InstallDbmsCtrl', function($scope){
    $scope.dbEngines = [ {
	id : 'MySQL',
	title : 'MySQL'
    } ];
})

/**
 * 
 */
.controller('InstallPackageCtrl', function($scope){

    /**
     * Search for contacts; use a random delay to simulate a remote call
     */
    function queryModuleSearch (criteria) {
	return criteria ? $scope.modules.filter(createFilterFor(criteria)) : [];
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
	var lowercaseQuery = angular.lowercase(query);

	return function filterFn(contact) {
	    return (angular.lowercase(contact.description).indexOf(lowercaseQuery) !== -1) ||
	    (angular.lowercase(contact.title).indexOf(lowercaseQuery) !== -1);
	};

    }

    function loadModules() {
	var contacts =  [ {
	    id : 'Pluf',
	    title : 'Pluf core',
	    description : 'Core pluf module'
	}, {
	    id : 'User',
	    title : 'User manager',
	    description : 'A module to enable user management API.'
	}, {
	    id : 'Group',
	    title : 'Group manager',
	    description : 'A module to enable group managemnt API.'
	}, {
	    id : 'Role',
	    title : 'Role manager',
	    description : 'A module to manage role management API.'
	}, {
	    id : 'Tenant',
	    title : 'Tenant manager',
	    description : 'A module to mange multi-tenancy and usr tenants.'
	}, {
	    id : 'CMS',
	    title : 'Content management system',
	    description : 'Default content management system.'
	}, {
	    id : 'Bank',
	    title : 'Banks',
	    description : 'A module to add banck, recipt and payment API.'
	}, {
	    id : 'Config',
	    title : 'Configuration',
	    description : 'A module to enable tenants configurations API.'
	}, {
	    id : 'Setting',
	    title : 'Settings',
	    description : 'A module to manage setting configuration.'
	}, {
	    id : 'Spa',
	    title : 'Single page application',
	    description : 'Manage SPAs and resources.'
	}, {
	    id : 'Calendar',
	    title : 'Calendar',
	    description : 'A module to add calendar and API.'
	}, {
	    id : 'Monitor',
	    title : 'Monitor',
	    description : 'A module to enable monitoring.'
	}, {
	    id : 'SDP',
	    title : 'Sell digital products',
	    description : ' A module to manage digital product and selling.'
	}, {
	    id : 'Message',
	    title : 'Message',
	    description : 'A module to enable messages API.'
	}, {
	    id : 'Book',
	    title : 'Book',
	    description : 'A module to enable book manager.'
	}, {
	    id : 'Backup',
	    title : 'Backup',
	    description : 'A module to enable backup system.'
	} ];

	contacts.forEach(function (m) {
	    m.image = 'images/package.svg';
	});
	return contacts;
    }


    $scope.modules = loadModules();
    $scope.modules.forEach(function(item){
	$scope.config.modules.push(item);
    });
    $scope.moduleSearch = queryModuleSearch;
});
