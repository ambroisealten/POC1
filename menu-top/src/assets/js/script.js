window.onload = charged;

function charged(){
    
    let moduleHome = document.getElementById("moduleHome");
    moduleHome.addEventListener("mouseover", function(e){
        let moduleLink = moduleHome.firstChild;
        let modules = moduleLink.nextSibling;
        moduleLink.style.display = "none";
        modules.style.display = "grid";
    });

    moduleHome.addEventListener('mouseout',function(e){
        let moduleLink = moduleHome.firstChild;
        let modules = moduleLink.nextSibling;
        moduleLink.style.display = "grid";
        modules.style.display = "none";
    })
    
}