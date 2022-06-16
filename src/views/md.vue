<template>
    <md-editor v-model="state.text" :editorId="state.id"  />
    <md-atalog :editorId="state.id" :scrollElement="scrollElement" :theme="state.theme" />
</template>

<script setup lang="ts">
import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"
const state = reactive({
    theme: "dark",
    text: "标题",
    id: "my-editor",
})

const scrollElement = document.documentElement
</script>
