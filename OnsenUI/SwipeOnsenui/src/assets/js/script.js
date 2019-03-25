window.onload = charged;
window.onchange = charged;

function charged(){
    setTimeout(() => {
        let itemList = document.getElementsByClassName('list-item');
        for(let item of itemList){
            item.addEventListener('click',test,false);
        }
    },50);
}
/*
window.fn.loadView(index) = function{
    let tabbar = document.getElementById('appTabbar');
    if(tabbar == undefined) {console.log('tabbar undefined')}
    tabbar.setActiveTab(index);
    let sidemenu = document.getElementById('sidemenu');
    if(sidemenu == undefined) {console.log('sidemenu undefined')}
    sidemenu.closest();
}
*/

function test(event){
    let parentNode = event.target.parentNode;
    while(parentNode.nodeName != "ONS-LIST-ITEM"){
        parentNode = parentNode.parentNode;
    }
    let id = parentNode.id.substr(4,1);
    document.getElementById('appTabbar').setActiveTab(id);
    document.getElementById('menu').close();
}