// 星星闪烁组件
<template>
    <div>
        <div class="star star2" :style="'width:' + size + 'px;height:' + size + 'px;top:' + top + 'px;left:' + left + 'px;right:' + right + 'px;animation-delay:' + delay + 's'"></div>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: "",
        },
        top: {
            type: String,
            default: "",
        },
        left: {
            type: String,
            default: "",
        },
        right: {
            type: String,
            default: "",
        },
        delay: {
            type: String,
            default: "",
        },
    },
    data() {
        return {}
    },
    created() {
        // console.log(this.delay)
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
.star {
    background-image: url("https://sucai.suoluomei.cn/sucai_zs/images/20201211172037-211357_VOTl_3549294.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    animation: opacity-change 1s ease-in-out infinite;
    -webkit-animation: opacity-change 1s ease-in-out infinite;
    -moz-animation: opacity-change 1s ease-in-out infinite;
    -o-animation: opacity-change 1s ease-in-out infinite;
    opacity: 0;
}

.star2 {
    animation: opacity-change 2s ease-in-out infinite;
    -webkit-animation: opacity-change 2s ease-in-out infinite;
    -moz-animation: opacity-change 2s ease-in-out infinite;
    -o-animation: opacity-change 2s ease-in-out infinite;
}

@keyframes opacity-change {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes opacity-change {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-moz-keyframes opacity-change {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-o-keyframes opacity-change {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
