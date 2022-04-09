<template>
	<div class="main-contents-wrap">
		<TopPage />
	</div>
</template>
<script>
export default {
	name: 'ContentsWrap',
}
</script>
<style>
	.main-contents-wrap {
		width: 100%;
	}
	.title {
		width: 100%;
		padding: 10px 20px;
		border-bottom: 1px solid #cccccc;
		font-weight: bold;
	}
	.contents-inner {
		padding: 10px 20px;
	}
		.contents-inner > li {
		display: grid;
		grid-template-columns: 60px 1fr;
		gap: 5px 0;
		grid-template-areas: "img info"
							"img comment";
	}
	.contents-inner > li + li {
		margin-top: 20px;
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
		padding: 0 5px;
		background-color: #F6E5B4;
		opacity: 0.8;
		width: fit-content;
		font-weight: bold;
		line-height: 1.4;
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
	}
</style>