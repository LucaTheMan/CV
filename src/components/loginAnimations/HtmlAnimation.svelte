<script lang="ts">

    import * as THREE from "three";

    export let scene: any;
    export let renderer: any;
    export let camera: any;

    const htmlStructure = new THREE.TextureLoader().load('/assets/loginPics/htmlLogo.png');

    const htmlAnimation = new THREE.Mesh(
        // new THREE.SphereGeometry(2.5).rotateY(10).rotateX(5.7),
        new THREE.BoxGeometry(4.5,4.5,4.5).rotateY(10).rotateX(6),
        new THREE.MeshBasicMaterial( {map: htmlStructure } )
    )

    htmlAnimation.position.x = -28;
    htmlAnimation.position.y = 3;


    scene.add(htmlAnimation);

    //function to loop the animation

    function animate(){
        requestAnimationFrame(animate);

        htmlAnimation.rotateY(+0.005);
        htmlAnimation.rotateX(+0.005);


        renderer.render(scene,camera);
    }

    animate();

</script>