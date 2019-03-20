window.onload = charged;
window.onchange = changed;

function charged(){
    setModuleHome();
    setHeadMenus();
    setCloseTag();
}

function changed(){
    setTimeout(() => {
        setHeadMenus();
        setCloseTag();
    },50);
}

function setModuleHome(){
    let moduleHome = document.getElementById("moduleHome");
    if(moduleHome != undefined){
        moduleHome.addEventListener("mouseover", function(e){
            moduleHome.firstChild.style.display = "none";
            moduleHome.firstChild.nextSibling.style.display = "grid";
        });
        moduleHome.addEventListener('mouseout',function(e){
            moduleHome.firstChild.style.display = "grid";
            moduleHome.firstChild.nextSibling.style.display = "none";
        });
    }
}

function setHeadMenus(){
    setTimeout(() =>{
        let headMenus = document.getElementsByClassName('headMenu');
        for(let headMenu of headMenus){
            headMenu.addEventListener("mouseover",function(e){
                headMenu.setAttribute('class',headMenu.getAttribute('class')+' show');
                headMenu.firstChild.setAttribute('aria-expanded',true);
                headMenu.firstChild.nextSibling.setAttribute('class',headMenu.firstChild.nextSibling.getAttribute('class')+' show');
            });
            headMenu.addEventListener("mouseout",function(e){
                headMenu.setAttribute('class',headMenu.getAttribute('class').substr(0,headMenu.getAttribute('class').length-5)); 
                headMenu.firstChild.setAttribute('aria-expanded',false);
                headMenu.firstChild.nextSibling.setAttribute('class',headMenu.firstChild.nextSibling.getAttribute('class').substr(0,headMenu.firstChild.nextSibling.getAttribute('class').length-5));    
            })
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