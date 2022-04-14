<template>
	<ul class="contents-inner creative-wrap">
		<li>
			<img src="../assets/1.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/2.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/3.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/4.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/5.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/6.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/7.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/8.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/9.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/10.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/11.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/12.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/13.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/14.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/15.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/16.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/17.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/18.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/19.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/20.gif" loading="lazy" />
		</li>
				<li>
			<img src="../assets/21.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/22.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/23.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/24.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/25.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/26.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/27.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/28.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/29.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/30.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/31.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/32.gif" loading="lazy" />
		</li>
		<li>
			<img src="../assets/33.gif" loading="lazy" />
		</li>
	</ul>
</template>
<script>
export default {
	name: 'Creative',
	}
</script>
<style scoped>
	.contents-inner.creative-wrap {
		display: flex;
		padding: 0 20px;
		gap: 40px;
		flex-wrap: wrap;
	}
	.contents-inner.creative-wrap > li {
		padding: 0;
		width: 470px;
		height: 325px;
		display: block;
	}
	@media (max-width: 767px) {
		.contents-inner.creative-wrap {
			display: flex;
			padding: 0 15px;
			gap: 15px 5px;
			flex-wrap: wrap;
		}
		.contents-inner.creative-wrap > li {
			width: 170px;
			height: 125px;
		}
	}
</style>
