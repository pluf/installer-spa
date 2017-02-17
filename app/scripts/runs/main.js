'use strict';

angular.module('installerSpaApp')
//
.run(function($rootScope, $mdSidenav) {

    //
    var ctrl = {};
    $rootScope.ctrl = ctrl;
    
    $rootScope.config = {
	    modules:[]
    };
    
    $rootScope.toggleSidenav = function(id) {
	$mdSidenav(id).toggle();
    };
    
    $rootScope.sidenavItems =[
	{
	    originalPath: '/home',
	    order: 10,
	    config:{
		icon: 'home',
		name: 'Home',
	    }
	},{
	    originalPath: '/contact',
	    order: 10,
	    config:{
		icon: 'phone',
		name: 'Contact us',
	    }
	},{
	    originalPath: '/install',
	    order: 10,
	    config:{
		icon: 'apps',
		name: 'Install',
	    }
	},{
	    originalPath: '/about',
	    order: 1,
	    config:{
		icon: 'face',
		name: 'About us',
	    }
	}
    ];
});
