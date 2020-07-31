angular
.module("serialGenerator")
.factory("serialGenerator", serialGenerator);

function serialGenerator () {
    var vm = this;
    var _length = 10;

    vm.getLength = getLength();

    function getLength () {
        return _length
    };

    vm.setLength = function (length) {
        _length = length;
    };

    vm.$get = function () {
        return {
            generate: function () {
                var serial = "";
                while(serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
};