var items = document.getElementsByClassName('item');
console.log(45, items.length);
var lis = document.getElementsByTagName('ul');
console.log(47, lis.length);
for (let i = 0; i < items.length; i++) {
    items[i].index = i;
    items[i].onclick = function () {
        for (let j = 0; j < lis.length; j++) {
            lis[j].style.display = 'none';
        }
        if (cLick % 2 == 0 && cLick != 0) {
            lis[this.index].style.display = 'none';
        } else {
            lis[this.index].style.display = 'block';
        }
        console.log(53, this.index);
    }
}