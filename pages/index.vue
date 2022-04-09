<template>
	<div>
		<TheHeader />
		<main>
			<MenuBar />
			<ContentsWrap />
		</main>
	</div>
</template>
<script>
export default {
	name: 'MainPage',
}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}
	ol, ul {
		list-style: none;
	}
	body {
		overflow: hidden;
	}
	main {
		display: flex;
	}
</style>