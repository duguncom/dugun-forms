/**
 * @ngdoc directive
 * @name dugun.forms:dgFormSelect2
 * @restrict 'E'
 * @scope
 **/
function DgFormSelect2() {
    return {
        restrict: 'E',
        scope: {
            model: '=ngModel',
            options: '=',
            idKey: '@',
            valueKey: '@',
            allowClear: '@',
            required: '=ngRequired',
            searchEnabled: '&',
            ngDisabled: '=',
            hasNoneValue: '='
        },
        templateUrl: 'form-elements/select2/single.html',
        compile: function(element, attrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    // set the defaults
                    if(!attrs.idKey) {
                        attrs.idKey = 'id';
                    }
                    if(!attrs.valueKey) {
                        attrs.valueKey = 'name';
                    }
                    scope.attrs = attrs;

                    scope.$watch('options', function(newVlaue) {
                        if (scope.hasNoneValue && newVlaue[0].id !== 0) {
                            scope.options.unshift({
                                id: 0,
                                name: 'None'
                            })
                        }
                    })
                }
            };
        }
    };
}

angular.module('dugun.forms').directive('dgFormSelect2', DgFormSelect2);
