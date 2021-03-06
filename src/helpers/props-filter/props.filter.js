angular.module('dugun.forms.helpers.propsFilter')
    .filter('props', function() {
        return function(items, id, value) {
            var out = [],
                props = {};

            props[id] = value;

            if(angular.isArray(items)) {
                items.forEach(function(item) {
                    var itemMatches = false;

                    var keys = Object.keys(props);
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if(typeof item === 'undefined' || typeof item[prop] === 'undefined' || item[prop] === null) {
                            itemMatches = false;
                            break;
                        }
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        };
    });
