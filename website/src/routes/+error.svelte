<!-- <script>
	import Footer from '$cmp/footer/Footer.svelte';
	import FooterContent from '$cmp/footer/FooterContent.svelte';
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
	import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
	import { modal } from '$lib/modals';
	import SendFeedbackModal from '$cmp/modals/SendFeedbackModal.svelte';

	/** @type {THREE.WebGLRenderer} */ let renderer;
	/** @type {THREE.Scene} */ let scene;
	/** @type {THREE.PerspectiveCamera} */ let camera;
	/** @type {THREE.Object3D<THREE.Event> | THREE.Mesh<TextGeometry, THREE.MeshBasicMaterial>} */ let textMesh;

	onMount(() => {
		// Set up the scene
		scene = new THREE.Scene();

		// Set up the camera
		camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1500);
		camera.position.set(0, 0, 800);
		let cameraTarget = new THREE.Vector3(0, 0, 0);

		const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
		dirLight.position.set(0, 0, 1).normalize();
		scene.add(dirLight);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		ambientLight.position.set(0, 200, 0);
		scene.add(ambientLight);

		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(new THREE.Color(0, 0, 0), 0);
		document.getElementById('three-container')?.appendChild(renderer.domElement);

		new FontLoader().load('banner/test.typeface.json', (font) => {
			const textGeometry = new TextGeometry('404', {
				font: font,
				size: 80,
				height: 20,
				bevelThickness: 2,
				bevelSize: 1.5,
				bevelEnabled: true,
				curveSegments: 4
			});

			textMesh = new THREE.Mesh(textGeometry, [
				new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
				new THREE.MeshPhongMaterial({ color: 0xffffff }) // side
			]);

			textGeometry.computeBoundingBox();

			const centerXOffset =
				-0.5 *
				(textGeometry.boundingBox != null
					? textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x
					: 0);

			const centerYOffset =
				-0.5 *
				(textGeometry.boundingBox != null
					? textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y
					: 0);

			textGeometry.translate(centerXOffset, centerYOffset, 0);
			textMesh.position.x = 0;
			textMesh.position.y = 40;
			textMesh.position.z = 0;

			scene.add(textMesh);
		});

		let mouseX = 0,
			mouseY = 0;

		document.addEventListener('mousemove', (event) => {
			mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth / 8;
			mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight / 8;
		});

		window.addEventListener(
			'deviceorientation',
			function (event) {
				mouseY = (event.beta || 0)/180-.5;
				mouseX = (event.alpha || 0)/180;
			},
			true
		);

		// Set up the render loop
		const render = () => {
			requestAnimationFrame(render);
			camera.lookAt(cameraTarget);
			renderer.render(scene, camera);

			//textMesh.rotation.y = mouseX * Math.PI;
			//textMesh.rotation.x = mouseY * Math.PI;
			textMesh.rotation.y += (mouseX * Math.PI - textMesh.rotation.y) * 0.1;
			textMesh.rotation.x += (mouseY * Math.PI - textMesh.rotation.x) * 0.1;
		};

		requestAnimationFrame(() => {
			render();
		});

		window.addEventListener('resize', () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		});
	});
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div data-rahneiln3scroll-section>
	<div
		class="hero bg-cover bg-center place-items-start"
		style="background-image: url('banner/final.jpg')"
	>
		<div class="relative">
			<div
				class="absolute w-screen h-screen hero-content text-center flex-col text-white max-w-none z-10"
			>
				<span
					class="uppercase text-lg font-semibold font-sans mt-4"
					data-rahneiln3scroll
					data-rahneiln3scroll-speed="2"
				>
					Page not found
				</span>
				<div class="h-24" />
				<div data-rahneiln3scroll data-rahneiln3scroll-speed="2" class="pt-8 flex flex-col gap-2">
					<span class="text-md font-semibold"> We couldn't find the page you're looking for! </span>
					<span class="text-md">
						You can try again later, or go back to the home page.<br />
						If you think it's a mistake, send us feedack :)
					</span>
				</div>
				<div class="flex flew-row gap-4">
					<div data-rahneiln3scroll data-rahneiln3scroll-speed="2" data-rahneiln3scroll-delay="0.1">
						<button
							class="btn"
							on:click={() =>
								modal.open($modal, SendFeedbackModal, {
									origin: '1WyKFczLKm@RahNeil_N3:+error:404:banner:button'
								})}
						>
							Send Feedback
						</button>
					</div>
					<div
						data-rahneiln3scroll
						data-rahneiln3scroll-speed="2"
						data-rahneiln3scroll-delay="0.07"
					>
						<a
							class="btn btn-accent text-white border-transparent hover:border-transparent bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 bg-size-200 bg-pos-10 hover:bg-pos-90"
							style="transition-property: background-position; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 400ms;"
							href="/"
						>
							Go back Home
						</a>
					</div>
				</div>
			</div>
			<div class="absolute w-screen">
				<div
					id="three-container"
					data-rahneiln3scroll
					data-rahneiln3scroll-speed="2"
					data-rahneiln3scroll-delay="0.1"
					style="-webkit-transform:rotate(360deg)"
				/>
			</div>

			<div class="h-screen" />
			<div class="w-screen invisible">
				<FooterContent />
			</div>
		</div>
	</div>
	<Footer />
</div>
 -->