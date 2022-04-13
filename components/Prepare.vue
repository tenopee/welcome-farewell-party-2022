<template>
	<ul class="contents-inner">
		<li>
			<p class="img">
				<img src="../assets/9.png" alt="まっすーの写真" />
			</p>
			<div class="info">
				<p class="name">まっすー</p>
				<p class="time">9:12</p>
			</div>
			<div class="comment">
				<p class="mention">@channel</p>
				<p class="text">事前に準備する事・物をご説明します！</p>
			</div>
		</li>
		<li class="date">
			<span>4月14日</span>
		</li>
		<li>
			<p class="img">
				<img src="../assets/discord.png" alt="Discordの写真" />
			</p>
			<div class="info">
				<p class="name">Discordアカウント作成</p>
				<p class="time">9:50</p>
			</div>
			<div class="comment">
				<p class="text">アカウント名は誰のかわかるようにしておいてください。</p>
				<p class="text">事前の接続確認をお願いします。</p>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/garticphone.png" alt="Gartic Phoneの写真" />
			</p>
			<div class="info">
				<p class="name">Gartic Phoneのルールの理解</p>
				<p class="time">21:22</p>
			</div>
			<div class="comment">
				<p class="text">下記ページにルールがまとまっているのでご参照ください。</p>
				<a href="https://www.tadahome.info/entry/Gratic_Phone" target="_blank" class="link">お絵かき伝言ゲーム『Gartic Phone』の遊び方・ルールまとめ</a>
			</div>
		</li>
		<li>
			<p class="img">
				<img src="../assets/meat.png" alt="食べ物＆飲み物の写真" />
			</p>
			<div class="info">
				<p class="name">食べ物＆飲み物</p>
				<p class="time">12:00</p>
			</div>
			<div class="comment">
				<p class="text">早く酔ってしまうのを防ぐために、飲む前にちょっとお腹に入れておきましょう。</p>
				<p class="text">次の日が休みではない人はお酒は程々にしましょう。</p>
			</div>
		</li>
	</ul>
</template>
<script>
export default {
	name: 'Prepare',
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
