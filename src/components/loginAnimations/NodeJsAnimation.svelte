<script lang="ts">

    import * as THREE from "three";

    export let scene: any;
    export let renderer: any;
    export let camera: any;


    const nodeStructure = new THREE.TextureLoader().load('src/assets/loginPics/nodeLogo.png');

    const nodeAnimation = new THREE.Mesh(
        // new THREE.SphereGeometry(2.5).rotateY(10).rotateX(5.7),
        new THREE.BoxGeometry(4.5,4.5,4.5).rotateY(10).rotateX(1),
        new THREE.MeshBasicMaterial( {map: nodeStructure } )
    )

    nodeAnimation.position.x = 10;
    nodeAnimation.position.y = 15;


    scene.add(nodeAnimation);

    function animate(){
        requestAnimationFrame(animate);

        nodeAnimation.rotateX(+0.005);
        nodeAnimation.rotateY(-0.005);

        renderer.render(scene,camera);
    }

    animate();

</script>