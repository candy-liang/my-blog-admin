<template>
    <div class="footer" :class="{ coverClass: !isHome }">Footer</div>
</template>

<script setup lang="ts">
const props = defineProps({
    isHome: {
        type: Boolean,
        default: true,
    },
})
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
}
.coverClass {
    background-color: rgba(255, 255, 255, 0.8);
    color: #333;
}
</style>
