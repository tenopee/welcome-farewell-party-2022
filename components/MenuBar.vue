<template>
	<menu class="menu-bar-wrap">
		<button type="button" value="top" @click="changePage($event)">トップ</button>
		<button type="button" value="prepare" @click="changePage($event)">事前準備</button>
		<button type="button" value="contents" @click="changePage($event)">コンテンツ</button>
		<button type="button" value="member" @click="changePage($event)">参加メンバー</button>
		<button type="button" value="talk" @click="changePage($event)">トークグループ分け</button>
	</menu>
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
		changePage(e) {
			this.page = e.target.value;
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
		z-index: 1;
	}
	menu {
		width: 100%;
	}
	menu > button {
		width: 100%;
		padding: 10px 20px;
		font-size: 16px;
		line-height: 40px;
		color: white;
		text-align: left;
	}
	menu > button::before {
		content: "＃";
	}
	menu > button:hover {
		background: #D37C70;
		cursor: pointer;
		color: white;
	}
	menu > option:checked,
	menu > option:active {
		background: #0F7E83;
		color: white;
	}
	@media (max-width: 767px) {
		.menu-bar-wrap {
			height: fit-content;
			display: flex;
			width: 100vw;
			line-height: 1.4;
			padding: 0;
		}
		menu > button {
			font-size: 12px;
			line-height: 20px;
			padding: 5px 10px;
			text-align: center;
		}
	}
</style>