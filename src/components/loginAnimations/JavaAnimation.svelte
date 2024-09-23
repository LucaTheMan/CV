<script lang="ts">

    import * as THREE from "three";

    export let scene: any;
    export let renderer: any;
    export let camera: any;

    const JavaStructure = new THREE.TextureLoader().load('src/assets/loginPics/javaLogo.png');

    const javaAnimation = new THREE.Mesh(
        // new THREE.SphereGeometry(2.5).rotateY(10).rotateX(5.7),
        new THREE.BoxGeometry(4.5,4.5,4.5).rotateY(10).rotateX(6),
        new THREE.MeshBasicMaterial( {map: JavaStructure } )
    )

    javaAnimation.position.x = 25;
    javaAnimation.position.y = 0;


    scene.add(javaAnimation);

    function animate(){
        requestAnimationFrame(animate);

        javaAnimation.rotateY(-0.005);
        javaAnimation.rotateX(-0.005);

        renderer.render(scene,camera);
    }

    animate();

</script>