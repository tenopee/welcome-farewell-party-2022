<template>
	<nav class="menu-bar-wrap">
		<ul class="menu">
			<li>トップ</li>
			<li>事前準備</li>
			<li>コンテンツ</li>
			<li>参加メンバー</li>
			<li>トークグループ分け</li>
		</ul>
	</nav>
</template>
<script>
export default {
	name: 'MenuBar',
	data() {
		return {
			open: false,
		}
	},
	methods: {
		closeModal() {
			console.log('hoge');
		},
	},
}
</script>
<style scoped>
	.menu-bar-wrap {
		padding: 20px 0;
		width: 20%;
		background: #0F7E83;
		height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	.menu {
		color: white;
		opacity: 0.8;
	}
	.menu > li {
		padding: 0 20px;
		font-size: 18px;
		line-height: 40px;
	}
	.menu > li::before {
		content: "＃";
	}
	.menu > li:hover {
		background: #D37C70;
		cursor: pointer;
		color: white;
	}
</style>