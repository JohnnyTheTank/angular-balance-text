/**
    @name: angular-balance-text 
    @version: 1.0.0 (31-03-2016) 
    @author: Jonathan Hornung <jonathan.hornung@gmail.com> 
    @url: https://github.com/JohnnyTheTank/angular-balance-text#readme 
    @license: MIT
*/
angular.module('jtt_balance_text', [])
    .directive('balanceText', function () {
        return {
            restrict: 'C',
            replace: 'false',
            link: function (scope, element, attrs) {
                element.balanceText();
                scope.$on('angular-balance-text.refresh', function () {
                    $.balanceTextUpdate();
                });
            }
        }
    });