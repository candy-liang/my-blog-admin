<template>
    <div class="home">
        <div class="enter_blog" @click="enterBlog">进 入 博 客</div>
        <div class="star_content">
            <!-- 星星 -->
            <!-- size 尺寸    top 距离顶部位置     left 距离左边位置    
             right 距离右边位置    delay 延迟出现特效时间秒数 -->
            <Star size="50" top="80" left="200" delay="0" />
            <Star size="60" top="450" left="450" delay="1.1" />
            <Star size="60" top="300" left="650" delay="2" />
            <Star size="60" top="150" right="150" delay="0.3" />
            <Star size="60" top="400" right="350" delay="2" />
            <Star size="60" top="200" right="550" delay="1.7" />
            <Star size="60" top="600" right="450" delay="2" />
            <!-- 流星 -->
            <Meteor size="5" top="100" left="400" delay="0" />
            <Meteor size="5" top="150" left="500" delay="3" />
            <Meteor size="5" top="170" left="700" delay="5" />
            <Meteor size="5" top="200" right="500" delay="7" />
            <Meteor size="5" top="200" right="400" delay="5" />
            <Meteor size="5" top="230" right="300" delay="3" />
            <Meteor size="5" top="200" right="100" delay="0" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Star from "../components/Star.vue"
import Meteor from "../components/Meteor.vue"
const router = useRouter()
const enterBlog = () => {
    router.push({
        name: "blog",
    })
}
</script>

<style lang="scss" scoped>
.star_content {
    overflow-x: hidden;
}
.enter_blog {
    position: fixed;
    top: 40%;
    left: 50%;
    color: #fff;
    transform: translate(-50%);
    width: 180px;
    height: 180px;
    line-height: 180px;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    border-radius: 50%;
    font-size: 25px;
    cursor: pointer;
    background-image: linear-gradient(315deg, #cc6aa5, #3e91cc, #2dcca7);
    box-shadow: 0 0 10px rgb(0, 153, 184) inset, 0 0 30px rgb(0, 153, 184);

    /* IE10、Firefox and Opera，IE9以及更早的版本不支持 */
    animation-name: bounce_in_top, breath; /* 动画名称 */
    animation-duration: 1.1s, 3s; /* 动画时长3秒 */
    animation-timing-function: ease-in-out, ease-in-out; /* 动画速度曲线：以低速开始和结束 */
    animation-iteration-count: 1, infinite; /* 播放次数：无限 */

    /* Safari and Chrome */
    -webkit-animation-name: bounce_in_top, breath; /* 动画名称 */
    -webkit-animation-duration: 1.1s, 3s; /* 动画时长3秒 */
    -webkit-animation-timing-function: ease-in-out, ease-in-out; /* 动画速度曲线：以低速开始和结束 */
    -webkit-animation-iteration-count: 1, infinite; /* 播放次数：无限 */
}
.enter_blog:hover {
    animation: none;
}

@keyframes bounce_in_top {
    0% {
        transform: translate(-50%, -500px);
    }
    38% {
        transform: translate(-50%, 0);
    }
    55% {
        transform: translate(-50%, -65px);
    }
    72% {
        transform: translate(-50%, 0);
    }
    81% {
        transform: translate(-50%, -28px);
    }
    90% {
        transform: translate(-50%, 0);
    }
    95% {
        transform: translate(-50%, -8px);
    }
    100% {
        transform: translate(-50%);
    }
}
@keyframes breath {
    from {
        opacity: 0.3;
    } /* 动画开始时的不透明度 */
    50% {
        opacity: 1;
    } /* 动画50% 时的不透明度 */
    to {
        opacity: 0.3;
    } /* 动画结束时的不透明度 */
}
@-webkit-keyframes breath {
    from {
        opacity: 0.3;
    }
    50% {
        opacity: 1;
    }
    to {
        opacity: 0.3;
    }
}
</style>
