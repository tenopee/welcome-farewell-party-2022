<template>
	<header>
		<p class="text">Frontend × Designer Welcome Farewell Party 2022 Spring</p>
		<div class="icn-wrap" area-hidden="true">
			<p class="icn-info" @click="openModal"></p>
			<a href="https://github.com/tenopee" target="_blank" class="icn-github"></a>
		</div>
		<div class="modal-wrap" @click="closeModal" :class="[open ? 'open' : '']">
			<div class="modal-inner">
				<p class="modal-text">Slackのデザインをオマージュさせていただいています。</p>
				<p class="creator">created by Tenopee</p>
			</div>
		</div>
	</header>
</template>
<script>
export default {
	name: 'TheHeader',
	data() {
		return {
			open: false,
		}
	},
	methods: {
		openModal() {
			if (!this.open) {
				this.open = true;
			}
		},
		closeModal() {
			this.open = false;
		},
	},
}
</script>
<style scoped>
	header {
		position: relative;
		height: 44px;
		background: #09646F;
	}
	.text {
		position: absolute;
		top: 50%;
		left: 40%;
		width: 50%;
		height: 26px;
		transform: translate3d(-50%, -50%, 0);
		background: #48838C;
		border: 1px solid #194C54;
		border-radius: 8px;
		font-size: 0.8em;
		line-height: 26px;
		color: white;
		text-align: center;
		opacity: 0.8;
	}
	.icn-wrap {
		display: flex;
		align-items: center;
		position: absolute;
		top: 50%;
		right: 15px;
		transform: translate3d(0, -50%, 0);
	}
	.icn-info {
		width: 20px;
		height: 20px;
		background: url('../static/info.png') no-repeat center/20px;
		border-radius: 4px;
		cursor: pointer;
	}
	.icn-github {
		display: block;
		width: 26px;
		height: 26px;
		margin-left: 10px;
		background: white url('../static/github.png') no-repeat center/26px;
		border-radius: 4px;
	}
	.modal-wrap {
		display: none;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		background: black;
		opacity: 0.8;
		width: 100vw;
		height: 100vh;
	}
	.modal-wrap.open {
		display: block;
	}
	.modal-inner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		background: white;
		padding: 20px;
		border: 1px solid grey;
		border-radius: 6px;
		width: 80%;
	}
	.modal-text {
		font-size: 14px;
	}
	.creator {
		padding-top: 10px;
		font-size: 14px;
		text-align: right;
	}
</style>