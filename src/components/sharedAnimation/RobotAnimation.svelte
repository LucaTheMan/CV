<script lang="ts">

    import * as THREE from "three";
    import {Mesh} from "three";

    export let scene: any;
    export let x: number = 0;
    export let y: number = 0;
    export let z: number = 0;
    export let rotateY: number = 0;


    const robotTexture = new THREE.TextureLoader().load('src/assets/loginPics/robot.png');

    const robot = new THREE.Mesh(
        new THREE.CapsuleGeometry(2,2,4).rotateY(rotateY),
        new THREE.MeshBasicMaterial( {map: robotTexture } )
    )

    robot.position.x = x;
    robot.position.y = y;
    robot.position.z = z;

    scene.add(robot);

    // Save the robot as a characteristic of the scene for easy access
    scene.userData.robot = robot;



</script>
