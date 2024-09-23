<script lang="ts">
    import router from "page";

    export let params;
    let message: string = "You are naughty! You didn't log in first.";

    function goToHome(){
        router('/');
    }

</script>

<div class="error-container">
    <h1>401</h1>
    <p>{message}</p>
    <button on:click={goToHome} class="back-home">Go to Home</button> <!-- Gebruik een button en voeg een click event toe -->
</div>

<style>

    .error-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 40px;
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.1); /* Semi-transparante achtergrond */
        backdrop-filter: blur(10px); /* Subtiele blur op de achtergrond */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Lichte schaduw */
    }

    h1 {
        font-size: 6em;
        margin: 0;
        color: #ff6b6b;
    }

    p {
        font-size: 1.8em;
        margin: 10px 0 20px;
    }

    .back-home {
        margin-top: 20px;
        background-color: #ff6b6b;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 1.2em;
        border: none;
        transition: background-color 0.3s;
    }

    .back-home:hover {
        background-color: #ff4d4d;
        cursor: pointer;

    }
</style>