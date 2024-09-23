<script lang="ts">

    import * as THREE from "three";
    import {Mesh} from "three";

    export let scene: any;
    export let renderer: any;
    export let camera: any;
    export let x: number = 0;
    export let y: number = 0;
    export let z: number = 0;
    export let wireframe: boolean = true;
    export let radius: number = 5;
    export let tube: number = 0.5;
    export let radialSegments: number = 20;
    export let tubularSegments: number = 100;
    export let color: number = 0xFF347;


    const geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments); // geometry for figure
    const material = new THREE.MeshBasicMaterial( { color: color, wireframe:wireframe } ); //basically the showcase of the 3d animation

    const torus = new THREE.Mesh(geometry,material); //the actual figure

    torus.position.x = x;
    torus.position.y = y;
    torus.position.z = z;


    const torus2 = new Mesh(geometry,material);
    torus2.position.x = x;
    torus2.position.y = y;
    torus2.position.z = z;

    scene.add (torus,torus2);

    // Save the torus as a characteristic of the scene for easy access
    scene.userData.torus = torus;
    scene.userData.torus2 = torus2;


    /*
    function to loop the animation
 */

    function animate(){
        requestAnimationFrame(animate);

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        torus.rotation.z += 0.005;

        torus2.rotation.x -= 0.015;
        torus2.rotation.y -= 0.01;
        torus2.rotation.z -= 0.01;

        renderer.render(scene, camera);
    }

    animate();


</script>
