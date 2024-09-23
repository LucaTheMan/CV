import router from "page";


export function isLoggedIn(ctx,next){
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    if (user !== null && user !== undefined) {
        next();
    } else{
        router("/error")
    }
}
