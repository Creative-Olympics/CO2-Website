<script>
	import { onMount } from 'svelte';
	import {
		Canvas,
		Scene,
		Mesh,
		WebGLRenderer,
		Texture,
		NearestFilter,
		MeshBasicMaterial,
		DoubleSide,
		Object3D,
		BoxGeometry,
		BoxBufferGeometry,
		Matrix4,
		Face3,
		PerspectiveCamera,
		AmbientLight,
		DirectionalLight,
		MeshStandardMaterial,
		TextureLoader,
		VertexColors
	} from 'svelthree';

	export let skinUrl = 'banner/char.png'; //'https://mc-heads.net/download/08831584f28940e0b572d1ae7363ec96';

	var texture = new TextureLoader().load(skinUrl);
	texture.magFilter = NearestFilter;
	texture.minFilter = NearestFilter;

	var material = new MeshBasicMaterial({
		map: texture
	});

	var materialTran = new MeshBasicMaterial({
		map: texture,
		transparent: true,
		depthWrite: false,
		side: DoubleSide
	});

	var sizes = {};
	sizes.charH = 1;
	sizes.pixRatio = 1 / 32;

	sizes.headH = 8 * sizes.pixRatio;
	sizes.headW = 8 * sizes.pixRatio;
	sizes.headD = 8 * sizes.pixRatio;

	sizes.helmetH = 9 * sizes.pixRatio;
	sizes.helmetW = 9 * sizes.pixRatio;
	sizes.helmetD = 9 * sizes.pixRatio;

	sizes.bodyH = 12 * sizes.pixRatio;
	sizes.bodyW = 8 * sizes.pixRatio;
	sizes.bodyD = 4 * sizes.pixRatio;

	sizes.legH = 12 * sizes.pixRatio;
	sizes.legW = 4 * sizes.pixRatio;
	sizes.legD = 4 * sizes.pixRatio;

	sizes.armH = 12 * sizes.pixRatio;
	sizes.armW = 4 * sizes.pixRatio;
	sizes.armD = 4 * sizes.pixRatio;

	var root = new Object3D();
	var group = new Object3D();
	group.position.y = sizes.charH - sizes.headH;
	var headGroup = group;
	root.add(headGroup);

	// Lets build the head (unlike poor HHH)

	var headGeometry = new BoxBufferGeometry(sizes.headW, sizes.headH, sizes.headD);
	var headMats = [];
	var posList = [[16, 24],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]
	posList.forEach(pos => {
		var newTe = texture.clone();
		newTe.offset.set(pos[0], pos[1]);
		newTe.needsUpdate = true;
		headMats.push(
			new MeshBasicMaterial({
				map: newTe
			})
		);
	});
	/*alert(headGeometry.attributes.uv.count)
	headGeometry.attributes.uv.setXYZW(0, 16, 24, 24, 16); // left
	headGeometry.attributes.uv.setXYZW(1, 0, 24, 8, 16); // right
	headGeometry.attributes.uv.setXYZW(2, 8, 32, 16, 24); // top
	headGeometry.attributes.uv.setXYZW(3, 16, 32, 24, 24); // bottom
	headGeometry.attributes.uv.setXYZW(4, 8, 24, 16, 16); // front
	headGeometry.attributes.uv.setXYZW(5, 24, 24, 32, 16); // back
	headGeometry.attributes.uv.needsUpdate = true;*/

	/*
	var helmetGeometry = new BoxBufferGeometry(sizes.helmetH, sizes.helmetH, sizes.helmetH);
	mapUv(helmetGeometry, 0, 48, 24, 56, 16); // left
	mapUv(helmetGeometry, 1, 32, 24, 40, 16); // right
	mapUv(helmetGeometry, 2, 40, 32, 48, 24); // top
	mapUv(helmetGeometry, 3, 48, 32, 56, 24); // bottom
	mapUv(helmetGeometry, 4, 40, 24, 48, 16); // front
	mapUv(helmetGeometry, 5, 56, 24, 64, 16); // back

	var bodyGeometry = new BoxGeometry(sizes.bodyW, sizes.bodyH, sizes.bodyD);
	mapUv(bodyGeometry, 0, 28, 12, 32, 0); // left
	mapUv(bodyGeometry, 1, 16, 12, 20, 0); // right
	mapUv(bodyGeometry, 2, 20, 16, 28, 12); // top
	mapUv(bodyGeometry, 3, 28, 16, 32, 12); // bottom
	mapUv(bodyGeometry, 4, 20, 12, 28, 0); // front
	mapUv(bodyGeometry, 5, 32, 12, 40, 0); // back

	var armRightGeometry = new BoxGeometry(sizes.armW, sizes.armH, sizes.armD);
	armRightGeometry.applyMatrix4(
		new Matrix4().makeTranslation(0, -sizes.armH / 2 + sizes.armW / 2, 0)
	);
	mapUv(armRightGeometry, 0, 48, 12, 52, 0); // right
	mapUv(armRightGeometry, 1, 40, 12, 44, 0); // left
	mapUv(armRightGeometry, 2, 44, 16, 48, 12); // top
	mapUv(armRightGeometry, 3, 48, 16, 52, 12); // bottom
	mapUv(armRightGeometry, 4, 44, 12, 48, 0); // front
	mapUv(armRightGeometry, 5, 52, 12, 56, 0); // back*/
</script>

<span>Hey</span>
<Canvas let:sti w={500} h={500}>
	<Scene {sti} let:scene id="scene1" props={{ background: 0xedf2f7 }}>
		<PerspectiveCamera
			{scene}
			id="cam1"
			pos={[2, 2, 3]}
			lookAt={[0, 0, 0]}
			props={{ fov: 45, aspect: 1, near: 0.01, far: 100 }}
		/>
		<AmbientLight {scene} intensity={1.25} />
		<DirectionalLight {scene} pos={[3, 3, 3]} />

		<Mesh {scene} geometry={headGeometry} material={headMats} pos={[0, sizes.headH / 2, 0]} />

		<!--
			<Mesh
				{scene}
				geometry={helmetGeometry}
				material={materialTran}
				pos={[0, sizes.headH / 2, 0]}
			/>

			<Mesh {scene} geometry={bodyGeometry} {material} pos={[0, sizes.legH + sizes.bodyH / 2, 0]} />

			<Mesh
				{scene}
				geometry={armRightGeometry}
				{material}
				pos={[-sizes.bodyW / 2 - sizes.armW / 2, sizes.legH + sizes.bodyH - sizes.armW / 2, 0]}
			/>-->
	</Scene>

	<WebGLRenderer {sti} sceneId="scene1" camId="cam1" config={{ antialias: true, alpha: true }} />
</Canvas>
