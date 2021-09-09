function filterTag (tagName,tagData) {
    const tagArray = document.getElementsByClassName('listed-item');
    for (var i = 0; i < tagArray.length; ++i) {
        if (tagArray[i].getAttribute(tagName).includes(tagData)){}
        else {
        tagArray[i].classList.add('hidden');
        }
    }
}

function removeFilterTag (tagName, tagData) {
    const tagArray = document.getElementsByClassName('listed-item');
    for (var i = 0; i < tagArray.length; ++i) {
        if (tagArray[i].getAttribute(tagName).includes(tagData)){}
        else {
        tagArray[i].classList.remove('hidden');
        }
    }
}

function clearFilters () {
    const tagArray = document.getElementsByClassName('listed-item');
    const topTagsArray = document.getElementsByClassName('top-tag');
    for (var i = 0; i < tagArray.length; ++i) {
        tagArray[i].classList.remove('hidden');
    }
    for (var i = 0; i < topTagsArray.length; ++i) {
        topTagsArray[i].classList.add('hidden');
    }
    document.getElementById('filters-heading').classList.add('hidden');
    document.getElementById('clear-button').classList.add('hidden');
}

function hideTag (tagName) {
    document.getElementById(tagName).classList.add('hidden');
}

function showTag (tagName) {
    document.getElementById(tagName).classList.remove('hidden');
}

function checkTagFilters() {
    const tagArray = document.getElementsByClassName('top-tag');
    var counter = 0;
    for (var i = 0; i < tagArray.length; ++i) {
        if (tagArray[i].classList.contains('hidden')){
            ++counter;
        }
    }
    if (counter === 16){
        document.getElementById('filters-heading').classList.toggle('hidden')
        document.getElementById('clear-button').classList.add('hidden');
    }
}

function showTagHeading(){
    document.getElementById('filters-heading').classList.remove('hidden');
    document.getElementById('clear-button').classList.remove('hidden')
}