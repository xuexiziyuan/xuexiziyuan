var searchOldValue;

function searchData(value) {
    console.log(miaov.test,9090)

}

function isSearch(value) {
    value && searchOldValue !== value && searchData(value);
    searchOldValue = value
}


window.onload = function () {
    searchNode.onkeyup = function (v) {
        v.key === 'Enter' ? isSearch(searchNode.value) : delay(isSearch, searchNode.value);
    };
    searchButton.onclick = function () {
        isSearch(searchNode.value);
    }
};