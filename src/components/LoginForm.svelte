<script lang="ts">
import LoginButton from "./LoginButton.svelte";
import {Account} from "../lib/Account";
import router from 'page'
import Toasts from "./Toast/Toasts.svelte";

let username: string = '';
let password: string  = '';

let message: string = "Wrong username/password";
let type: string = "error";
let dismissible: boolean = true;
let timeout: number = 2000;

let account: Account | null = null;

function handleUsernameInput(event: Event) {
    const target = event.target as HTMLInputElement;
    username = target.value;
}

function handlePasswordInput(event: Event) {
    const target = event.target as HTMLInputElement;
    password = target.value;
}


function handleSubmit(event: Event) {
    event.preventDefault();
    account = new Account(username,password);

    // get the correct loginData from the environment variables.
    const correctUsername: string = import.meta.env.VITE_CORRECT_USERNAME;
    const correctPassword: string = import.meta.env.VITE_CORRECT_PASSWORD;

    if (account.getUsername() === correctUsername && account.getPassword() === correctPassword) {
        sessionStorage.setItem('user',JSON.stringify(account));
        router('/home');
    }

}

</script>

<div class="login-box">
    <h1>Login</h1>
    <form id="loginForm" on:submit={handleSubmit}>
        <div class="user-box">
            <input on:input={handleUsernameInput} type="text" name="username" required>
            <label>Username</label>
        </div>
        <div class="user-box">
            <input on:input={handlePasswordInput} type="password" name="password" required>
            <label>Password</label>
        </div>
        <LoginButton message={message} type={type} dismissible={dismissible} timeout={timeout}/>
    </form>
</div>

<Toasts/>

<style>

    .login-box {

        width: 35vw;
        min-width: 200px;
        padding: 40px;

        background: rgba(0, 2, 37, 0.5) ;
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0,0,0,.6);
        border-radius: 10px;

    }

    .login-box h1 {
        margin: 0px 0 30px;
        padding: 0;
        color: #fff;
        text-align: center;

    }

    .login-box .user-box {
        position: relative;
    }

    .login-box .user-box input {

        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }
    .login-box .user-box label {
        position: absolute;
        top:0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
    }

    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 12px;
    }


</style>