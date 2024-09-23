<script lang="ts">
import {addToast} from "../lib/toastStore";

export let message;
export let type;
export let dismissible;
export let timeout;

</script>

<button class="submit" type="submit" on:click={() => addToast({ message, type, dismissible, timeout })}>
    <span>L</span><span>o</span><span>g</span><span>i</span><span>n</span>
</button>

<style>
    .submit {
        text-transform: uppercase;
        letter-spacing: 4px;

        margin-top: 40px;
        width: 100px;
        height: 30px;
        background-color: transparent;
        color: #03e9f4;
        border: 0px;
        border-radius: 5px;

        animation: text-flicker 2s infinite;
        transition: all 0.5s ease;

    }

    .submit:hover {

        color: white;
        background: linear-gradient(45deg, rgba(103, 255, 255, 0.78), rgba(103, 255, 255, 0.45));
        box-shadow: 0px 0px 50px 10px rgba(103, 255, 255, 0.7);
        border-radius: 5px;
        animation: none;

    }

    .submit span {
        animation: faulty-flicker 2s infinite;
    }

    .submit span:nth-child(1) {
        animation-delay: 0s;
    }
    .submit span:nth-child(2) {
        animation-delay: 0.2s;
    }
    .submit span:nth-child(3) {
        animation-delay: 0.4s;
    }
    .submit span:nth-child(4) {
        animation-delay: 0.6s;
    }
    .submit span:nth-child(5) {
        animation-delay: 0.8s;
    }

    @keyframes faulty-flicker {
        0% {
            opacity: 0.1;
        }
        2% {
            opacity: 0.1;
        }
        4% {
            opacity: 0.5;
        }
        19% {
            opacity: 0.5;
        }
        21% {
            opacity: 0.1;
        }
        23% {
            opacity: 1;
        }
        80% {
            opacity: 0.5;
        }
        83% {
            opacity: 0.4;
        }

        87% {
            opacity: 1;
        }
    }
</style>