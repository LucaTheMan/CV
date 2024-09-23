<script lang="ts">
    import * as THREE from 'three';
    import StarAnimation from './sharedAnimation/StarAnimation.svelte';
    import RobotAnimation from "./sharedAnimation/RobotAnimation.svelte";
    import SvelteLogoAnimation from "./loginAnimations/SvelteLogoAnimation.svelte";
    import JavascriptLogoAnimation from "./loginAnimations/JavascriptLogoAnimation.svelte";
    import JavaAnimation from "./loginAnimations/JavaAnimation.svelte";
    import HtmlAnimation from "./loginAnimations/HtmlAnimation.svelte";
    import CssAnimation from "./loginAnimations/CssAnimation.svelte";
    import ThreejsAnimation from "./loginAnimations/ThreejsAnimation.svelte";
    import NodeJsAnimation from "./loginAnimations/NodeJsAnimation.svelte";
    import {onDestroy, onMount} from "svelte";
    import TorusAnimation from "./sharedAnimation/DoubleTorusAnimation.svelte";
    import DoubleTorusAnimation from "./sharedAnimation/DoubleTorusAnimation.svelte";


    const scene = new THREE.Scene(); //container of 3d model

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("bg"),
        alpha: true //background transparant
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    //---------------------

    const ambientLight = new THREE.AmbientLight;

    scene.add(ambientLight);

    // Function to update z-index based on window width
    function updateZIndex() {
        if (window.innerWidth <= 1400) {
            document.getElementById('bg').style.zIndex = "-1";
        } else {
            document.getElementById('bg').style.zIndex = "0";
        }
    }

    // Resize handler
    function onWindowResize() {

        updateZIndex();

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // check if z-index needs to be updated after refresh
    onMount(() => {
        updateZIndex();
    });

    window.addEventListener('resize', onWindowResize);

    // Cleanup function
    onDestroy(() => {
        // Stop the animation loop

        // Dispose of Three.js objects
        renderer.dispose();
        scene.clear();
    });

</script>

<RobotAnimation scene={scene} x={-2} y={2} rotateY={3.2}/>
<DoubleTorusAnimation scene={scene} renderer={renderer} camera={camera} x={-2} y={2}/>

<StarAnimation scene={scene}/>
<SvelteLogoAnimation scene={scene} renderer={renderer} camera={camera}/>
<JavascriptLogoAnimation scene={scene} renderer={renderer} camera={camera}/>
<JavaAnimation scene={scene} renderer={renderer} camera={camera}/>
<HtmlAnimation scene={scene} renderer={renderer} camera={camera}/>
<CssAnimation scene={scene} renderer={renderer} camera={camera}/>
<ThreejsAnimation scene={scene} renderer={renderer} camera={camera}/>
<NodeJsAnimation scene={scene} renderer={renderer} camera={camera}/>


<style>


</style>