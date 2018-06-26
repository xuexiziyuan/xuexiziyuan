var meta;
var global = window;
global.searchNode = document.getElementById('searchNode');
global.searchButton = document.getElementById('searchButton');
global.delay = function (fn, value) {
    clearTimeout(meta);
    meta = setTimeout(function () {
        fn(value)
    }, 3000);
};