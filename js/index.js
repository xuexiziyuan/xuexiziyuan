var searchOldValue;
var listIndex;
var liIndex;
var activeItem = 'imooc';
var activeItemKey = 'frontEnd';

function searchData(value) {
    console.log(list)
}

function isSearch(value) {
    value && searchOldValue !== value && searchData(value);
    searchOldValue = value
}

function showResult(data, arr) {
    var html = '', concatArr = [];
    if (!data) {
        arr.map(function (value) {
            concatArr = concatArr.concat(value.item)
        });
        concatArr.map(function (item) {
            html += resultTemplate(item)
        });
        result.innerHTML = html
    } else if (data) {
        data.item.map(function (item) {
            html += resultTemplate(item)
        });
        result.innerHTML = html
    }
}


function showList(data) {
    var resultHtml = navHtmlTemplate();
    data.map(function (item) {
        resultHtml += navHtmlTemplate(item.name)
    });
    navResult.innerHTML = resultHtml;
    var navResultIndex;
    var navResultList = transformTo(navResult.getElementsByClassName('navResult'));
    navResultList.map(function (item, index) {
        item.node.onclick = function () {
            if (index === navResultIndex || (index === 0 && navResultIndex === undefined)) {
                return
            }
            this.className = this.className === 'navResult active' ? 'navResult' : 'navResult active';
            navResultList[~~navResultIndex].node.className = 'navResult';
            navResultIndex = index;
            showResult(data[index - 1], data)
        }
    });
    showResult(false, data)
}

function listResult() {
    console.log(window[activeItem][activeItemKey]);
    showList(window[activeItem][activeItemKey])
}


window.onload = function () {
    searchNode.onkeyup = function (v) {
        v.key === 'Enter' ? isSearch(searchNode.value) : delay(isSearch, searchNode.value);
    };
    searchButton.onclick = function () {
        isSearch(searchNode.value);
    };
    list.map(function (item, index) {
        item.node.onclick = function () {
            if (index === listIndex || (index === 0 && listIndex === undefined)) {
                return
            }
            this.className = this.className === 'list active' ? 'list' : 'list active';
            list[~~listIndex].node.className = 'list';
            listIndex = index;
            activeItem = item.name;
            listResult();
        }
    });
    li.map(function (item, index) {
        item.node.onclick = function () {
            if (index === liIndex || (index === 0 && liIndex === undefined)) {
                return
            }
            this.className = this.className === 'li active' ? 'li' : 'li active';
            li[~~liIndex].node.className = 'li';
            liIndex = index;
            activeItemKey = item.name;
            listResult();
        }
    });

    listResult()
};