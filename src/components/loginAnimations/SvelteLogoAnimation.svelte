<script lang="ts">

    import * as THREE from "three";

    export let scene: any;
    export let renderer: any;
    export let camera: any;

    const svelteStructure = new THREE.TextureLoader().load('/assets/loginPics/svelteLogo.png');

    const svelte = new THREE.Mesh(
        new THREE.BoxGeometry(4.5,4.5,4.5).rotateY(10).rotateX(10),
        new THREE.MeshBasicMaterial( {map: svelteStructure } )
    )

    svelte.position.x = -28;
    svelte.position.y = -13;


    scene.add(svelte);

    // const geometry = new THREE.TorusGeometry( 5, 0.5, 20, 100); // geometry for figure
    // const material = new THREE.MeshBasicMaterial( { color: 0xFF347, wireframe:true } ); //basically the showcase of the 3d animation
    //
    // const torus = new THREE.Mesh(geometry,material); //the actual figure
    // torus.position.x = -28;
    // torus.position.y = -13;
    //
    // scene.add(torus);

    // function to loop the animation

    function animate(){
        requestAnimationFrame(animate);

        svelte.rotateY(+0.01);
        // torus.rotation.x -= 0.005;
        // torus.rotation.y -= 0.005;
        // torus.rotation.z -= 0.005;
        renderer.render(scene,camera);
    }

    animate();

</script>