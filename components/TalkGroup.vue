<template>
	<ul class="contents-inner">
		<li>
			<p class="img">
				<img src="../assets/9.png" alt="まっすーの写真" />
			</p>
			<div class="info">
				<p class="name">まっすー</p>
				<p class="time">19:12</p>
			</div>
			<div class="comment">
				<p class="text"> 当日お知らせします！！</p>
			</div>
		</li>
		<li class="date">
			<span>今日</span>
		</li>
		<li>
			<p class="img">
				<img src="../assets/9.png" alt="まっすーの写真" />
			</p>
			<div class="info">
				<p class="name">まっすー</p>
				<p class="time">5:10</p>
			</div>
			<div class="comment">
				<p class="mention">@channel</p>
				<p class="text">トークグループの発表です！！</p>
			</div>
		</li>
		<li class="date">
			<span>talk-room1</span>
		</li>
		<li class="person-wrap">
			<p>もこちゃん</p>
			<p>しゅうさん</p>
			<p>ふるちぃ</p>
			<p>ガッキー</p>
			<p>まっすー</p>
			<p>ふるぽん</p>
			<p>シローさん</p>
		</li>
		<li class="date">
			<span>talk-room2</span>
		</li>
		<li class="person-wrap">
			<p>ぺけちょ</p>
			<p>かなぴょん</p>
			<p>さくさん</p>
			<p>こじはる</p>
			<p>こっしー</p>
			<p>とりっぴー</p>
			<p>かいのぴー</p>
		</li>
	</ul>
</template>
<script>
export default {
	name: 'TalkGroup',
}
</script>
<style scoped>
	.contents-inner > li:not(.date).person-wrap {
		display: block;
	}
	.contents-inner > li:not(.date).person-wrap > p {
		line-height: 2;
	}
	.contents-inner > li:not(.date).person-wrap > p::before {
		content: "🌸";
		margin-right: 8px;
	}
</style>
