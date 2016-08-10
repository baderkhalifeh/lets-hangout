(function () {
  'use strict';

  var baseUrl = 'http://letsshangout.herokuapp.com';
  var localUrl = 'http://localhost:8000'; 

  angular
    .module('lets-hangout.services', [])
    .factory('Categories', Categories)
    .factory('Group',Group)

  Categories.$inject = ['$http'];

  function Categories($http){
  	var getAll = function(){
			return $http({
				method: 'GET',
				url: baseUrl + '/api/categories'
			})
			.then(function(resp){
				return resp.data;
			});
		};

		return {
			getAll: getAll
		};

  };

  //group factory
  Group.$inject = ['$http'];

  function Group($http){
    var newGroup = function (groupName,id){
      return $http({
        method:'POST',
        url: baseUrl +'/api/group/user/'+id,
        data:{
           groupName:groupName
        }
       })
       .then(function(resp){
          return resp;
       });
    };

    var allGroups = function(){
      return $http({
        method: 'GET',
        url: baseUrl  +'/api/group'
      })
      .then(function(resp){
        return resp.data;
      });
    };

    var groupInfo = function(groupName){
      console.log(1);
      return $http({
        method: 'GET',
        url: baseUrl +'/api/'+groupName
      })
      .then(function(resp){
        return resp.data;
      });
    };

    var dashboardInfo = function(id){
      return $http({
        method: 'GET',
        url: baseUrl  +'/api/dashboard/'+id
      })
      .then(function(resp){
        return resp.data;
      });
    };

    return {
      newGroup:newGroup,
      allGroups:allGroups,
      groupInfo:groupInfo,
      dashboardInfo:dashboardInfo 
    };

  };

} ());

.factory('DashBoard', function($http){
	var baseUrl = 'http://localhost:8000';

	var createNew = function(){
		return $http({
			method:'POST',
			url: baseUrl + '/api/dashboard'
		})
		.then(function(resp){
			return resp;
		});
	};

	var getInfo = function(dashBoardID){
		return $http({
			method:'GET',
			url: baseUrl + '/api/dashboard/' + dashBoardID
		})
		.then(function(resp){
			return resp.data;
		});
	};

	var addOption = function(dashBoardID, subCategoryID){
		return $http({
			method:'PUT',
			url:baseUrl + '/api/dashboard/addOption/' + dashBoardID,
			data:{
				subCategoryId : subCategoryID
			}
		})
		.then(function(resp){
			return resp.data
		});
	};

	var eleminateOptions = function(dashBoardID, subCategoryID){
		return $http({
			method:'PUT',
			url:baseUrl + '/api/dashboard/eleminateOptions/' + dashBoardID,
			data:{
				subCategoryID : subCategoryID
			}
		})
		.then(function(resp){
			return resp.data
		});
	};

	var voteForOption = function(dashBoardID, optionID){
		return $http({
			method: 'PUT',
			url:baseUrl + '/api/dashboard/voteForOption/' + dashBoardID,
			data:optionID
		})
		.then(function(resp){
			return resp.data
		});
	};

	var getchosenOption = function(optionID){
		return $http({
			method:'GET',
			url:baseUrl + '/api/dashboard/chosenID/' + optionID
		})
		.then(function(resp){
			return resp.data
		});
	};

	return {
		createNew : createNew,
		getInfo : getInfo,
		addOption : addOption,
		eleminateOptions : eleminateOptions,
		voteForOption : voteForOption,
		getchosenOption : getchosenOption
	}

})

.factory ('SubCategory', function($http){
	var baseUrl = 'http://localhost:8000';
	
	var getInfo = function(subCategoryID){
		return $http({
			method: 'GET',
			url: baseUrl + '/api/subCategory/' + subCategoryID
		})
		.then(function(resp){
			return resp.data;
		});
	}



	return {
		getInfo : getInfo
	}
})
