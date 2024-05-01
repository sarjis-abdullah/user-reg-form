// import { SupportedLanguages } from "~~/lib/contants";
// import { LoginService } from "~~/lib/services";
// import { LoginStorage } from "~~/storage/LoginStorage"

export default defineNuxtRouteMiddleware((to,from)=>{
    
    if (process.server) return;
    function getToken() {
        if (window !== undefined || window !== null) {
            console.log('found');
            return window.localStorage.getItem('ACCESS_TOKEN');
        }
        console.log("object");
        return false
    }
    let token = getToken();
    console.log(token, 'token');
    if(!token){
        // return navigateTo('/login')
    }
    else{
        return
    }
})