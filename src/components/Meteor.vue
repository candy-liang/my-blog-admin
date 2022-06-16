// 流行划过组件
<template>
	<div>
		<div
			class="meteor"
			:style="
				'width:' +
					size +
					'px;height:' +
					size +
					'px;top:' +
					top +
					'px;left:' +
					left +
					'px;right:' +
					right +
					'px;animation-delay:' +
					delay +
					's'
			"
		></div>
	</div>
</template>
 
<script>
export default {
	props: {
		size: {
			type: String,
			default: '',
		},
		top: {
			type: String,
			default: '',
		},
		left: {
			type: String,
			default: '',
		},
		right: {
			type: String,
			default: '',
		},
		delay: {
			type: String,
			default: '',
		},
	},
	data() {
		return {}
	},
	created() {},
	methods: {},
}
</script>
 
<style lang="scss" scoped>
.meteor {
	display: block;
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: #fff;
	position: absolute;
	transform-origin: 100% 0;
	animation: meteor-ani 4s linear infinite;
	-webkit-animation: meteor-ani 5s linear infinite;
	box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.3);
	opacity: 0;
	z-index: 0;
}
.meteor:after {
	content: '';
	display: block;
	border: 0px solid #fff;
	border-width: 0px 90px 2px 90px;
	border-color: transparent transparent transparent rgba(255, 255, 255, 0.3);
	transform: rotate(-45deg) translate3d(1px, 3px, 0);
	box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
	transform-origin: 0% 100%;
}
.pink {
	top: 100px;
	left: 800px;
	background: #fff;
	animation-delay: 3s;
	-webkit-animation-delay: 3s;
	-moz-animation-delay: 3s;
}
.pink:after {
	border-color: transparent transparent transparent #fff;
	animation-delay: 3s;
	-webkit-animation-delay: 3s;
	-moz-animation-delay: 3s;
}
.blue {
	top: 120px;
	left: 1200px;
	background: fff;
	animation-delay: 7s;
	-webkit-animation-delay: 7s;
	-moz-animation-delay: 7s;
}
.blue:after {
	border-color: transparent transparent transparent fff;
	-webkit-animation-delay: 7s;
	-moz-animation-delay: 7s;
	animation-delay: 7s;
}
@keyframes meteor-ani {
	0% {
		opacity: 0;
		transform: scale(0) translate3d(0, 0, 0);
	}
	20% {
		opacity: 0.8;
		transform: scale(0.2) translate3d(-100px, 100px, 0);
	}
	40% {
		opacity: 0.8;
		transform: scale(0.4) translate3d(-200px, 200px, 0);
	}
	60% {
		opacity: 0.8;
		transform: scale(0.6) translate3d(-300px, 300px, 0);
	}
	80% {
		opacity: 1;
		transform: scale(1) translate3d(-350px, 350px, 0);
	}
	100% {
		opacity: 1;
		transform: scale(1.2) translate3d(-400px, 380px, 0);
	}
}
</style>