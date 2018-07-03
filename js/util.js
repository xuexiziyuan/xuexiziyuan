var meta, global = window;
global.searchNode = document.getElementById('searchNode');
global.searchButton = document.getElementById('searchButton');
global.navResult = document.getElementById('navResult');
global.result = document.getElementById('result');
global.identifier = document.getElementById('identifier');
global.maskLayer = document.getElementById('maskLayer');
global.content = document.getElementById('content');
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
        return "<li class='navResult active'>不限</li>";
    }
};
global.listResultClick = function listResultClick(data) {
    identifier.innerHTML = (
        "<p>编号：" + data.id + "</p>" +
        "<li>来源：" + data.from + "</li>" +
        "<li>作者：" + data.author + "</li>" +
        "<li>课名：" + data.title + "</li>"
    );
    showClick(true, content, maskLayer)
};

global.showClick = function showClick(flag) {
    if (flag) {
        for (var i = 1; i < arguments.length; i++) {
            arguments[i].style.display = 'block'
        }
    } else {
        for (var j = 1; j < arguments.length; j++) {
            arguments[j].style.display = 'none'
        }
    }
};

global.hideClick = function hideClick(flag) {
    showClick(flag, content, maskLayer)
};

function resultTemplate(data) {
    return ("<li class='listResult' onclick=\'listResultClick(" + JSON.stringify(data) + ")\'>"
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