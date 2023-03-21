<script>
	// @ts-nocheck

	import { SkinViewer } from 'skinview3d';
	import { onMount } from 'svelte';
	import { Vector3 } from 'three';

	onMount(() => {
		let skinViewer = new SkinViewer({
			canvas: document.getElementById('skin_container'),
			width: 300,
			height: 400,
			skin: 'img/skin.png'
		});

		// Change viewer size
		skinViewer.width = 100;
		skinViewer.height = 300;

		// Load another skin
		skinViewer.loadSkin('banner/char.png');

		// Set the background color
		//skinViewer.background = 0x5a76f3;

		// Set the background to a normal image
		skinViewer.loadBackground('img/background.png');

		// Set the background to a panoramic image
		skinViewer.loadPanorama('img/panorama1.png');

		skinViewer.controls.enabled = false;

		// Change camera FOV
		skinViewer.fov = 70;

		// Zoom out
		skinViewer.zoom = 0.5;

		skinViewer.camera.setRotationFromAxisAngle(new Vector3(0.5, 0, 0), Math.PI / 2);
		skinViewer.camera.updateMatrix();
		skinViewer.camera.updateMatrixWorld();
		skinViewer.camera.updateProjectionMatrix();
		skinViewer.playerWrapper.rotateY(-Math.PI / 16);
		// Apply an animation
		//skinViewer.animation = new WalkingAnimation();
	});
</script>

<canvas id="skin_container" />
