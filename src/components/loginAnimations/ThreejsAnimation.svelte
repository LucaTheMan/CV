<script lang="ts">

    import * as THREE from "three";

    export let scene: any;
    export let renderer: any;
    export let camera: any;

    const threeJsStructure = new THREE.TextureLoader().load('/assets/loginPics/three.png');

    const threeJsAnimation = new THREE.Mesh(
        new THREE.BoxGeometry(4.5,4.5,4.5).rotateY(10).rotateX(12),
        new THREE.MeshBasicMaterial( {map: threeJsStructure } )
    )

    threeJsAnimation.position.x = -3;
    threeJsAnimation.position.y = -15;


    scene.add(threeJsAnimation);

    function animate(){
        requestAnimationFrame(animate);

        threeJsAnimation.rotateY(+0.005);
        threeJsAnimation.rotateZ(+0.005);


        renderer.render(scene,camera);
    }

    animate();

</script>