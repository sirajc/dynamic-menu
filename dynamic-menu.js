'use strict';
/*
 * dynamic_menu.js
 *
 * The MIT License
 *
 * Copyright (c) 2014 Sirajuddin Choudhary
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
angular.module('dynamicMenu', ['ngResource']).factory('DynamicMenuFactory', ['$resource',
    function($resource) {
        /* Strictly follow the JSON structure provided in dynamic-menu.json */
        return $resource('dynamic-menu/dynamic-menu.json', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: false
            }
        });
    }
]).controller('DynamicMenuController', ['$scope', '$location', 'DynamicMenuFactory',
    function($scope, $location, DynamicMenuFactory) {
        $scope.navigationDetail = DynamicMenuFactory.query();
        $scope.$on('$routeChangeSuccess', function() {
            var path = '#app' + $location.path();
            var found = false;
            $scope.navigationDetail.$promise.then(function(result) {
                $scope.navigationDetail = result;
                angular.forEach($scope.navigationDetail.leftMenu, function(menu) {
                    if (path.indexOf(menu.url) == 0) {
                        $scope.navigationDetail.activeMenuId = menu.menuId;
                        found = true;
                    }
                });
                if (!found) {
                    angular.forEach($scope.navigationDetail.rightMenu, function(menu) {
                        if (path.indexOf(menu.url) == 0) {
                            $scope.navigationDetail.activeMenuId = menu.menuId;
                            found = true;
                        }
                    });
                }
            });
        });
    }
]).directive('navigationBar', function() {
    // Runs during compile
    return {
        name: 'navigationBar',
        scope: {
            navigationDetail: '='
        },
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        templateUrl: 'dynamic-menu/dynamic-menu.html',
        replace: true,
    };
});