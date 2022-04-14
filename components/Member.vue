<template>
	<ul class="contents-inner">
		<li class="date">
			<span>Designer</span>
		</li>
		<li>
			<p class="img">
				<img src="../assets/1.png" alt="もこちゃんの写真" />
			</p>
			<div class="info">
				<p class="name">もこちゃん</p>
				<p class="time">20:20</p>
			</div>
			<div class="comment">
				<p class="text">送別会主役！！</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/2.png" alt="ぺけちょの写真" />
			</p>
			<div class="info">
				<p class="name">ぺけちょ</p>
				<p class="time">20:22</p>
			</div>
			<div class="comment">
				<p class="text">歓迎会主役！！</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/3.png" alt="しゅうさんの写真" />
			</p>
			<div class="info">
				<p class="name">しゅうさん</p>
				<p class="time">20:22</p>
			</div>
			<div class="comment">
				<p class="text">歓迎会主役！！</p>
			</div>
		</li>
		<!-- <li>
			<p class="img">
				<img src="../assets/4.png" alt="かなぴょんの写真" />
			</p>
			<div class="info">
				<p class="name">かなぴょん</p>
				<p class="time">20:22</p>
			</div>
			<div class="comment">
				<p class="text">kpop初心者</p>
			</div>
		</li> -->
		<li>
			<p class="img">
				<img src="../assets/5.png" alt="ふるちぃの写真" />
			</p>
			<div class="info">
				<p class="name">ふるちぃ</p>
				<p class="time">20:20</p>
			</div>
			<div class="comment">
				<p class="text">頼れる姐さん</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/6.png" alt="さくさんの写真" />
			</p>
			<div class="info">
				<p class="name">さくさん</p>
				<p class="time">20:21</p>
			</div>
			<div class="comment">
				<p class="text">kpopオタ</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/7.png" alt="ガッキーの写真" />
			</p>
			<div class="info">
				<p class="name">ガッキー</p>
				<p class="time">20:21</p>
			</div>
			<div class="comment">
				<p class="text">ひたすらちいかわ</p>
			</div>
		</li>
		<li class="date">
			<span>Frontend</span>
		</li>
		<li>
			<p class="img">
				<img src="../assets/8.png" alt="こじはるの写真" />
			</p>
			<div class="info">
				<p class="name">こじはる</p>
				<p class="time">20:1?</p>
			</div>
			<div class="comment">
				<p class="text">ガンダム・スプラ・原神</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/9.png" alt="まっすーの写真" />
			</p>
			<div class="info">
				<p class="name">まっすー</p>
				<p class="time">20:18</p>
			</div>
			<div class="comment">
				<p class="text">Apex・Fortnite</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/10.png" alt="こっしーの写真" />
			</p>
			<div class="info">
				<p class="name">こっしー</p>
				<p class="time">20:20</p>
			</div>
			<div class="comment">
				<p class="text">トロピカーナの栄養補給できるやつとポイフル大好き</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/11.png" alt="ふるぽんの写真" />
			</p>
			<div class="info">
				<p class="name">ふるぽん</p>
				<p class="time">20:20</p>
			</div>
			<div class="comment">
				<p class="text">良い枕が欲しい</p>
			</div>
		</li>
		<!-- <li>
			<p class="img">
				<img src="../assets/12.png" alt="とりっぴーの写真" />
			</p>
			<div class="info">
				<p class="name">とりっぴー</p>
				<p class="time">20:21</p>
			</div>
			<div class="comment">
				<p class="text">今度「出川哲朗の充電させてもらえませんか?」にちょっと出るかもしれない</p>
			</div>
		</li> -->
		<li>
			<p class="img">
				<img src="../assets/13.png" alt="シローさんの写真" />
			</p>
			<div class="info">
				<p class="name">シローさん</p>
				<p class="time">20:21</p>
			</div>
			<div class="comment">
				<p class="text">いいコーヒーメーカーが欲しい</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/14.png" alt="いのぴーの写真" />
			</p>
			<div class="info">
				<p class="name">いのぴー</p>
				<p class="time">20:22</p>
			</div>
			<div class="comment">
				<p class="text">井上さんです。VALORANT</p>
			</div>
		</li>
	</ul>
</template>
<script>
export default {
	name: 'Member',
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
