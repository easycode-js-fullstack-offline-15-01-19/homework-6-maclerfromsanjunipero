// -------------------------- Home work#6 --------------------------
// -------------------------- Vasilenko Max --------------------------

//--Events.Tasks

//--Task#1
 let btnMsg = document.getElementById("btn-msg");

 btnMsg.addEventListener('click', function () {
     alert(btnMsg.dataset.text)
 });


//--Task#2
btnMsg.onmouseover = function () {
    btnMsg.setAttribute('style','background-color:red;');
};
btnMsg.onmouseout = function () {
    btnMsg.removeAttribute('style');
};

//--Task#3
document.addEventListener('click',function (e) {
    document.querySelector("#tag").textContent = 'Tag: '+ e.target.tagName;
});

//--Task#4
let btnGen = document.getElementById("btn-generate");

btnGen.addEventListener('click', function () {
    let findUl = document.querySelector('ul');
    let createLi = document.createElement('li');
    let textLi = 'item ' + (findUl.children.length + 1);

    createLi.appendChild(document.createTextNode(textLi));
    findUl.appendChild(createLi);
});

//--Task#6

let dropDownItem = document.querySelectorAll('.dropdown-item');
let menuHide = document.getElementsByClassName('dropdown-menu');
for (let i = 0; i < dropDownItem.length; i++){
    dropDownItem[i].setAttribute('id', 'menu-click'+[i]);
    menuHide[i].setAttribute('id', 'menu-hide'+[i]);
}

let menuClickFirst = document.getElementById('menu-click0');
let menuClickSecond = document.getElementById('menu-click1');

menuClickFirst.addEventListener('click',function () {
    document.getElementById('menu-hide0').classList.toggle('d-none');
    document.getElementById('menu-hide1').classList.add('d-none');
});

menuClickSecond.addEventListener('click',function () {
    document.getElementById('menu-hide1').classList.toggle('d-none');
    document.getElementById('menu-hide0').classList.add('d-none');
});

