<script lang="ts">
    import * as THREE from 'three';
    import {Mesh} from "three";
    import StarAnimation from "./sharedAnimation/StarAnimation.svelte";
    import {onDestroy, onMount} from "svelte";
    import RobotAnimation from "./sharedAnimation/RobotAnimation.svelte";
    import DoubleTorusAnimation from "./sharedAnimation/DoubleTorusAnimation.svelte";


    const scene = new THREE.Scene(); //container of 3d model

    const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('bg'),
        alpha: true //background transparant
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);



    const ambientLight = new THREE.AmbientLight;

    scene.add(ambientLight);

    // ---------------------

    //move camera when scrolling
    function moveCamera(){
        const t = document.body.getBoundingClientRect().top;

        // Use scene.userData to get acces to the robot.
        if (scene.userData.robot) {
            scene.userData.robot.rotation.y = t * -0.005;
        }
        camera.rotation.y = t * -0.0008

    }

    document.body.onscroll = moveCamera;


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
        renderer.dispose();
        scene.clear();
        window.removeEventListener('resize', onWindowResize);
        document.body.onscroll = null;
    });



</script>


<StarAnimation scene={scene}/>
<RobotAnimation scene={scene} y={1} x={8} z={15} rotateY={2.5} />
<DoubleTorusAnimation scene={scene} renderer={renderer} camera={camera} y={1} x={8} z={15} tubularSegments={8} color={0xFFA500}/>

<style>


</style>