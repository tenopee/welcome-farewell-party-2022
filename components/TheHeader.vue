<template>
	<header>
		<p class="text">Welcome Farewell Party 2022 Spring</p>
	</header>
</template>
<script>
export default {
	name: 'TheHeader',
}
</script>
<style scoped>
	header {
		position: sticky;
		top: 0;
		height: 44px;
		background: #09646F;
		z-index: 1;
	}
	.text {
		position: absolute;
		top: 50%;
		left: 40%;
		width: 50%;
		height: 26px;
		transform: translate3d(-50%, -50%, 0);
		background: #48838C;
		border: 1px solid #194C54;
		border-radius: 8px;
		font-size: 0.8em;
		line-height: 26px;
		color: white;
		text-align: center;
		white-space: nowrap;
		opacity: 0.8;
	}
	@media (max-width: 767px) {
		.text {
			left: 45%;
			width: fit-content;
			padding: 0 15px;
		}
	}
</style>