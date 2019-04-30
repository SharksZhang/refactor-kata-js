let _title = "untitled";
result += `<h1>${getTitle()}</h1>`;



//Some references access the variable:
setTitle(obj['articleTitle']);


function setTitle(arg) {
    _title = arg
}

function getTitle() {
    return _title
}