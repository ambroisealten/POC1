export class AuthService{

    signIn(){
        if(window.sessionStorage.getItem("bearerToken") !== null){
            window.sessionStorage.setItem('isAuth','true');
        }
    }

    signOut(){
        window.sessionStorage.clear(); 
    }
}