<script>
    import LoginAnimation from '../components/LoginAnimation.svelte'
    import LoginForm from "../components/LoginForm.svelte";

    export let params;
</script>

<LoginAnimation/>

<div class="login-container">

    <div class="left-half">
        <h3>
            Welcome!
        </h3>
        <p style="font-size: 18px">
            After logging in, you will gain access to my resume.<br>
            Here you will find an overview of my skills and work experience. <br><br>
            Discover my work in the fields of web development, design, and project management. <br>
            If you have any questions or would like to learn more, please don't hesitate to contact me. <br>
            Thank you for your interest!
        </p>

    </div>

    <div class="right-half">
        <LoginForm/>
    </div>
</div>


<style>


    .login-container {
        position: relative;
        display: flex;
        flex-direction: row;

        min-width: 100%;
        min-height: 100vh;

        /*border: 2px red solid;*/
        overflow: auto;
        z-index: 1;
    }

    .left-half, .right-half {
        /*border: 1px #84ff00 solid;*/
        flex: 1;
        padding: 40px;

    }

    .left-half {
        display: flex;
        flex-direction: column; /*left half needs to be a column*/
        text-align: left;

    }

    .right-half {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    @media screen and (max-width: 700px){
        .login-container {
            flex-direction: column;
        }

        .left-half, .right-half {
            padding: 20px;
        }

    }



</style>