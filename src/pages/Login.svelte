<script>
    import LoginAnimation from '../components/LoginAnimation.svelte'
    import LoginForm from "../components/LoginForm.svelte";

    export let params;
</script>

<LoginAnimation/>

<div class="login-container">

    <div class="left-half">
        <h3>
            Welkom!
        </h3>
        <p style="font-size: 18px">
            Na het inloggen krijgt u toegang tot mijn CV.<br>
            Hier vindt u een overzicht van mijn vaardigheden en afgeronde projecten. <br><br>
            Ontdek mijn werk op het gebied van webontwikkeling, design en projectbeheer. <br>
            Als u vragen heeft of meer wilt weten, aarzel dan niet om contact met mij op te nemen. <br>
            Bedankt voor uw interesse!
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