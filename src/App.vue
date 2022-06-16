<template>
    <div :class="{ app: isHome }">
        <Header :isHome="isHome" />
        <div class="main">
            <router-view></router-view>
            <el-backtop :bottom="100" :visibility-height="50"></el-backtop>
        </div>
        <Footer :isHome="isHome" />
    </div>
</template>

<script setup lang="ts">
import Header from "@C/Header.vue"
import Footer from "@C/Footer.vue"
const isHome = ref(true)
const route = useRoute()
watch(
    () => route.name,
    (newValue, oldValue) => {
        if (newValue != "home") {
            isHome.value = false
        } else {
            isHome.value = true
        }
    },
    { immediate: true }
)
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    padding-top: 70px;
    min-height: calc(100vh - 140px);
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
<style lang="scss">
@import "/style/reset.css";
#app {
    background-color: #f1f0f0;
}
.app {
    background: url("@/assets/poster.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
