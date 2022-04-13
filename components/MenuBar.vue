<template>
	<menu class="menu-bar-wrap">
		<button type="button" value="top" class="top" @click="changePage($event)">トップ</button>
		<button type="button" value="prepare" class="prepare" @click="changePage($event)">事前準備</button>
		<button type="button" value="contents" class="contents" @click="changePage($event)">コンテンツ</button>
		<button type="button" value="member" class="member" @click="changePage($event)">参加メンバー</button>
		<button type="button" value="talk" class="talk" @click="changePage($event)">トークグループ分け</button>
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
	.menu-bar-wrap > button {
		width: 100%;
		padding: 10px 20px;
		font-size: 16px;
		line-height: 40px;
		color: white;
		text-align: left;
	}
	.menu-bar-wrap > button::before {
		content: "＃";
	}
	.menu-bar-wrap > button:hover {
		background: #D37C70;
		cursor: pointer;
		color: white;
	}
	.menu-bar-wrap > option:checked,
	.menu-bar-wrap > option:active {
		background: #0F7E83;
		color: white;
	}
	@media (max-width: 767px) {
		.menu-bar-wrap {
			display: flex;
			flex-wrap: wrap;
			height: fit-content;
			width: 100vw;
			padding: 0;
		}
		.menu-bar-wrap > button {
			font-size: 12px;
			line-height: 16px;
			padding: 4px 0;
			text-align: center;
		}
		.menu-bar-wrap > button.top,
		.menu-bar-wrap > button.prepare,
		.menu-bar-wrap > button.contents {
			width: calc(100vw / 3);
		}
		.menu-bar-wrap > button.member,
		.menu-bar-wrap > button.talk {
			width: calc(100vw / 2);
		}
	}
</style>