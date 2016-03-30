angular.module('jtt_balance_text', [])
    .directive('balanceText', function () {
        return {
            restrict: 'C',
            replace: 'false',
            link: function (scope, element, attrs) {
                element.balanceText();
                console.log("hi");
                /*
                scope.$on('angular-balance-text.refresh', function () {
                    $.balanceTextUpdate();
                });
                */


            }
        }
    });