var meta, global = window;
global.searchNode = document.getElementById('searchNode');
global.searchButton = document.getElementById('searchButton');
global.navResult = document.getElementById('navResult');
global.result = document.getElementById('result');
global.list = transformTo(document.getElementsByClassName('list'));
global.li = transformTo(document.getElementsByClassName('li'));
global.delay = function delay(fn, value) {
    clearTimeout(meta);
    meta = setTimeout(function () {
        fn(value)
    }, 3000);
};

global.navHtmlTemplate = function htmlTemplate(name) {
    if (name) {
        return '<li class="navResult">' + name + '</li>';
    } else {
        return "<li class='navResult active' name='all'>不限</li>";
    }
};

function resultTemplate(data) {
    return ("<li>"
        + "<div>"
        + "<img src=\'./img/" + data.url + "\'>"
        + "</div>"
        + "<p class='from'>" + data.from + "</p>"
        + "<p class='title'>" + data.title + "</p>"
        + "<p class='author'>" + data.author + "</p>"
        + "</li>")
}

function transformTo(list) {
    return Array.prototype.slice.call(list).map(function (i) {
        return {node: i, name: i.getAttribute('name')}
    });
}

