<template>
	<ul class="contents-inner">
		<li>
			<p class="img">
				<img src="../assets/9.png" alt="まっすーの写真" />
			</p>
			<div class="info">
				<p class="name">まっすー</p>
				<p class="time">10:00</p>
			</div>
			<div class="comment">
				<p class="mention">@channel</p>
				<p class="text">もこちゃんが離任されるのと、新しい人が入られるので飲み会やりませんか？</p>
				<ul class="emoji">
					<li>🎉　13</li>
					<li class="yaruzo">8</li>
					<li>😍　3</li>
					<li>🔥　1</li>
					<li class="mocoTaro">4</li>
				</ul>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/9.png" alt="まっすーの写真" />
			</p>
			<div class="info">
				<p class="name">まっすー</p>
				<p class="time">12:05</p>
			</div>
			<div class="comment">
				<p class="text">よっしゃーやるでーーーー！！！</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/9.png" alt="まっすーの写真" />
			</p>
			<div class="info">
				<p class="name">まっすー</p>
				<p class="time">14:00</p>
			</div>
			<div class="comment">
				<p class="text">日程決まりました！！！</p>
				<p class="text">4月14日の20時スタートです！</p>
				<p class="text">スケジュールにも入れておきました！</p>
				<p class="text">4月で色々と大変な時期かとは思いますが、そんな大変さを忘れるくらい楽しみましょう！！！</p>
			</div>
		</li>
		<li v-if="newPost" class="date">
			<span>今日</span>
		</li>
		<li v-if="newPost">
			<p class="img">
				<img src="../assets/9.png" alt="まっすーの写真" />
			</p>
			<div class="info">
				<p class="name">まっすー</p>
				<p class="time">{{time}}</p>
			</div>
			<div class="comment">
				<p class="text">思いっきり楽しみましょう！人見知り厳禁！！</p>
			</div>
		</li>
	</ul>
</template>
<script>
export default {
	name: 'Top',
	data() {
		return {
			open: false,
			time: '19:00',
			newPost: false,
		}
	},
	mounted() {
		setTimeout(() => {
			this.newPost = true;
			const date = new Date(); 
			const hour = date.getHours();
			const minutes = date.getMinutes().toString().padStart(2, '0');
			this.time = `${hour}:${minutes}`;
		}, 3000);
	},
}
</script>
<style scoped>
	.yaruzo {
		width: 15px;
		height: 15px;
		background: #f0f0f0 url("../assets/yaruzo.png") no-repeat 9px / 15px;
		padding: 0 0 5px 30px;
	}
	.mocoTaro {
		width: 15px;
		height: 15px;
		background: #f0f0f0 url("../assets/mocotaro.gif") no-repeat 9px / 15px;
		padding: 0 0 5px 30px;
	}
</style>
