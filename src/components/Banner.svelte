<script>
	let imgIndex = 1;

	var intervalId = window.setInterval(function () {
		imgIndex++;
		if (imgIndex >= 50) clearInterval(intervalId);
	}, 1000 / 10);
</script>

<div
	class="w-screen h-screen bg-cover"
	style="background-image: url('/fframes/{String(imgIndex).padStart(4, '0')}.jpg')"
>
	<video class="h-screen w-screen object-cover" playsinline disableremoteplayback muted autoplay aria-hidden="true">
		<source src="frames.mp4" type="video/mp4" />
	</video>
</div>
