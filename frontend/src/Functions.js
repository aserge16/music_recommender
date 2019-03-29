export function addCheckBox(){
    var check = document.getElementById('checkBox');
    var song = document.getElementById('search').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(song));
    check.appendChild(entry);
    document.getElementById('search').value = ''
}