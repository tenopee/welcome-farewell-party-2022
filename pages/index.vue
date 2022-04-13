<template>
	<div>
		<TheHeader />
		<main>
			<MenuBar @changePage="changePage" />
			<div class="main-contents-wrap">
				<div class="contents-wrap">
					<p class="title">{{ this.title }}</p>
					<Top v-if="this.page === 'top'"/>
					<Prepare v-else-if="page === 'prepare'"/>
					<Contents v-else-if="page === 'contents'"/>
					<Member v-else-if="page === 'member'"/>
					<TalkGroup v-else/>
				</div>
			</div>
		</main>
	</div>
</template>
<script>
export default {
	name: 'index',
	data() {
		return {
			title: 'トップ',
			page: 'top',
		}
	},
	methods: {
		changePage(pageName) {
			this.page = pageName;
			if (this.page === 'top') {
				this.title = 'トップ';
			} else if (this.page === 'prepare') {
				this.title = '事前準備';
			} else if (this.page === 'contents') {
				this.title = 'コンテンツ';
			} else if (this.page === 'member') {
				this.title = '参加メンバー';
			} else {
				this.title = 'トークグループ分け';
			}
		}
	}
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
	a {
		text-decoration: none;
	}
	button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
        appearance: none;
	}
	main {
		display: flex;
	}
	.main-contents-wrap {
		width: 100%;
		font-size: 14px;
	}
	.title {
		padding: 10px 20px;
		border-bottom: 1px solid #cccccc;
		font-weight: bold;
	}
	.contents-inner {
		margin: 15px 0 30px;
	}
	.contents-inner > li.date {
		position: relative;
		margin: 20px 0;
		border-top: 1px solid #cccccc;
	}
	.contents-inner > li.date > span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		border: 1px solid #cccccc;
		border-radius: 4px;
		text-align: center;
		margin: 0 auto;
		padding: 6px 10px;
		background: #FFFFFF;
		font-size: 14px;
		font-weight: bold;
		line-height: 1;
	}
	.contents-inner > li:not(.date) {
		display: grid;
		grid-template-columns: 60px 1fr;
		gap: 5px 0;
		grid-template-areas: "img info"
							"img comment";
		padding: 15px 20px;
	}
	.img {
		grid-area: img;
		width: 50px;
		height: 50px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.info {
		display: flex;
		align-items: baseline;
		grid-area: info;
	}
	.name {
		font-weight: bold;
		line-height: 1;
	}
	.time {
		padding-left: 10px;
		font-size: 10px;
		color: gray;
	}
	.comment {
		grid-area: comment;
	}
	.comment > p {
		line-height: 1.8;
	}
	.comment > p.mention {
		padding: 2px 6px;
		border-radius: 4px;
		background-color: #F6E5B4;
		opacity: 0.8;
		width: fit-content;
		font-weight: bold;
		line-height: 1;
	}
	.emoji {
		display: flex;
		gap: 5px;
		align-items: center;
	}
	.emoji > li {
		background: #f0f0f0;
		border-radius: 10px;
		padding: 0 8px;
		font-size: 10px;
		font-weight: bold;
		line-height: 20px;
		white-space: nowrap;
	}

	@media (max-width: 767px) {
		main {
			display: block;
		}
	}
</style>