<script lang="ts">

    import * as THREE from "three";

    export let scene: any;

    //add stars to background
    function addStars(){
        const geometry2 = new THREE.SphereGeometry(0.25,24,24);
        const material2 = new THREE.MeshStandardMaterial();
        const star = new THREE.Mesh(geometry2,material2);

        //randomly generate x y z positions voor stars.
        let [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));

        star.position.set(x,y,z);
        scene.add(star);

    }

    Array(300).fill().forEach(addStars);

</script>