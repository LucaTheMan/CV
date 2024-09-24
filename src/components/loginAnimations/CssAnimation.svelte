<script lang="ts">

    import * as THREE from "three";
    import {onDestroy} from "svelte";

    export let scene: any;
    export let renderer: any;
    export let camera: any;

    const cssStructure = new THREE.TextureLoader().load('/assets/loginPics/cssLogo.png');

    const cssAnimation = new THREE.Mesh(
        // new THREE.SphereGeometry(2.5).rotateY(10).rotateX(5.7),
        new THREE.BoxGeometry(4.5,4.5,4.5).rotateY(10).rotateX(8),
        new THREE.MeshBasicMaterial( {map: cssStructure } )
    )

    cssAnimation.position.x = -15;
    cssAnimation.position.y = -6;


    scene.add(cssAnimation);

    function animate(){
        requestAnimationFrame(animate);

        cssAnimation.rotateZ(-0.005);
        cssAnimation.rotateX(-0.005);

        renderer.render(scene,camera);
    }

    animate();

</script>