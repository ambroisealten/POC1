window.onload = charged;
window.onchange = changed;

function charged(){
    setHeadMenus();
    setCloseTag();
}

function changed(){
    setTimeout(() => {
        setHeadMenus();
        setCloseTag();
    },50);
}



function handler(e){
    let parentNode = e.target.parentNode;
    if(parentNode.getAttribute('class').includes('headMenu')){
        if(parentNode.getAttribute('class').includes('show')){
            parentNode.setAttribute('class',parentNode.getAttribute('class')+' show');
            parentNode.firstChild.setAttribute('aria-expanded',true);
            parentNode.firstChild.nextSibling.setAttribute('class',parentNode.firstChild.nextSibling.getAttribute('class')+' show');
        } 
    }
}

function setHeadMenus(){
    setTimeout(() =>{
        let headMenus = document.getElementsByClassName('headMenu');
        for(let headMenu of headMenus){
            headMenu.addEventListener('click',handler,true);
            headMenu.addEventListener("mouseover",function(e){
                headMenu.setAttribute('class',headMenu.getAttribute('class')+' show');
                headMenu.firstChild.setAttribute('aria-expanded',true);
                headMenu.firstChild.nextSibling.setAttribute('class',headMenu.firstChild.nextSibling.getAttribute('class')+' show');
            },true);
            headMenu.addEventListener("mouseout",function(e){
                if(headMenu.getAttribute('class').includes(" show")) headMenu.setAttribute('class',headMenu.getAttribute('class').substr(0,headMenu.getAttribute('class').length-5)); 
                if(headMenu.firstChild.getAttribute('aria-expanded')) headMenu.firstChild.getAttribute('aria-expanded',false);
                if(headMenu.firstChild.nextSibling.getAttribute('class').includes(" show")) headMenu.firstChild.nextSibling.setAttribute('class',headMenu.firstChild.nextSibling.getAttribute('class').substr(0,headMenu.firstChild.nextSibling.getAttribute('class').length-5));
            },true);
        };
    },50);
}

function setCloseTag(){
    let closeTags = document.getElementsByClassName("closeTag");
    for(let closeTag of closeTags){
        closeTag.addEventListener("mouseover",function(e){
            closeTag.parentElement.style = "background-color:red; color: white;";
        });
        closeTag.addEventListener("mouseout",function(e){
            closeTag.parentElement.style = "background-color: #E6E6E9; color : #043962;";
        });
    }
}