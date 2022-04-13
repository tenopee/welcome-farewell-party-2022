<template>
	<nav class="menu-bar-wrap">
		<select size="10" name="menu" v-model='page' class="menu" @change="changePage">
			<option value="top" selected>トップ</option>
			<option value="prepare">事前準備</option>
			<option value="contents">コンテンツ</option>
			<option value="member">参加メンバー</option>
			<option value="talk">トークグループ分け</option>
		</select>

	</nav>
</template>
<script>
export default {
	name: 'MenuBar',
	data() {
		return {
			page: 'top',
		}
	},
	methods: {
		changePage() {
			this.$emit('changePage', this.page);
		},
	},
}
</script>
<style scoped>
	.menu-bar-wrap {
		position: sticky;
		top: 44px;
		padding: 20px 0;
		width: 300px;
		background: #0F7E83;
		height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	.menu {
		width: 100%;
	}
	.menu > option {
		padding: 10px 20px;
		font-size: 16px;
		line-height: 40px;
		color: white;
	}
	.menu > option::before {
		content: "＃";
	}
	.menu > option:hover {
		background: #D37C70;
		cursor: pointer;
		color: white;
	}
	.menu > option:checked,
	.menu > option:active {
		background: #0F7E83;
		color: white;
	}
</style>