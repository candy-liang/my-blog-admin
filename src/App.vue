<template>
    <div class="app">
        <div class="menu" :style="'width:' + menu_width">
            <div class="logo">{{ logo_name }}</div>
            <el-menu :collapse="isCollapse" active-text-color="#ffd04b" background-color="#233140"
                class="el-menu-vertical-demo" default-active="/article/class" text-color="#fff" router :collapse-transition="false">
                <el-menu-item index="/">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <template #title>首 页</template>
                </el-menu-item>
                <el-sub-menu index="/article">
                    <template #title>
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>文 章</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/article/class">分 类</el-menu-item>
                        <el-menu-item index="/article/list">列 表</el-menu-item>
                        <el-menu-item index="/article/tags">标 签</el-menu-item>
                        <el-menu-item index="/article/detial">内 容</el-menu-item>
                        <el-menu-item index="/article/comment">评 论</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="main">
            <div class="header">
                <el-icon @click="collapsMenu" :size="20" class="collapse">
                    <Expand v-show="!isCollapse" />
                    <Fold v-show="isCollapse" />
                </el-icon>
            </div>
            <div class="tabs"></div>
            <div class="router">
                <router-view></router-view>
            </div>
            <div class="footer">
                页脚
            </div>
        </div>
    </div>
    <el-backtop :bottom="100" :visibility-height="50"></el-backtop>
</template>

<script setup lang="ts">
const isCollapse = ref(false)
const menu_width = ref('220px')
const logo_name = ref('后台管理系统')
const collapsMenu = () => {
    if (isCollapse.value) {
        menu_width.value = "220px"
        logo_name.value = "后台管理系统"
        setTimeout(() => {
            isCollapse.value = false
        }, 500);
    } else {
        isCollapse.value = true
        menu_width.value = "70px"
        logo_name.value = "admin"
    }
}

</script>

<style lang="scss" scoped>
.app {
    display: flex;
    background-color: #f5f7f9;

    .menu {
        min-height: 100vh;
        background-color: #233140;
        transition: all 0.5s;

        .logo {
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #fff;
        }
    }

    .main {
        flex: 1;

    }

    .tabs,
    .header {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        padding: 0 10px;
    }

    .header {
        height: 50px;

    }

    .tabs {
        height: 35px;
    }

    .collapse {
        cursor: pointer;
    }

    .router {
        min-height: calc(100vh - 135px);
        padding: 20px;
    }

    .footer {
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-top: 1px solid #ddd;
    }
}

.el-menu {
    border-right: none;
}
</style>
<style lang="scss">
@import "/style/reset.css";
</style>
