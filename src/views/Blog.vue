<template>
    <div class="blog">
        <!-- 文章分类 -->
        <div class="menu">
            <el-card class="card">
                <h3>文章分类 <all-application theme="outline" size="16" fill="#29b89b" /></h3>
                <ul>
                    <li :class="{ active: currentClass == item.type }" v-for="item in menuList">
                        {{ item.name }}<span class="count">({{ item.count }})</span>
                    </li>
                </ul>
            </el-card>
        </div>

        <!-- 文章列表 -->
        <div class="center" v-show="!isDetail">
            <el-card class="card menu2">
                <!-- <h3>文章分类</h3> -->
                <el-radio-group v-model="radio1">
                    <el-radio-button v-for="item in menuList" :label="item.name">{{ item.name }}</el-radio-button>
                </el-radio-group>
            </el-card>
            <ul>
                <li v-for="item in 6" @click="isDetail = true">
                    <el-card class="card list">
                        <h3>异步编程的实现</h3>
                        <div class="description">
                            <div class="left">
                                JS是单线程运行的，那么在JS代码中想要实现异步就只有采用单线程非阻塞式的方式分为两部分来执行，先调用setTimeout方法，然后把要执行的函数放到一个队列中。
                                代码继续往下执行，当把所有的代码都执行完后，放到队列中的函数才会被执行. 这样，所有异步执行的函数都不会阻塞其他代码的执行。 注意，JS的单线程并不是指整个JS引擎只有1个线程。
                                它是指运行代码只有1个线程，但是它还有其他线程来执行其他任务。 比如时间函数的计时、AJAX技术中的和后台交互等操作。 同时，由于执行代码只有1个线程，所以在任何同步代码中出现死循环，
                                那么它后续的同步代码以及异步的回调函数都无法执行。
                            </div>
                            <div class="right">
                                <img src="@/assets/avatar.jpg" alt="" />
                            </div>
                        </div>
                        <div class="correlation">
                            <comment theme="outline" size="18" />
                            <span class="item">22</span>
                            <preview-open theme="outline" size="20" />
                            <span class="item">88</span>
                            <calendar theme="outline" size="18" />
                            <span class="item">2022-06-06</span>
                        </div>
                    </el-card>
                </li>
            </ul>
            <el-pagination class="pagination" background layout="prev, pager,next" :total="1000" />
        </div>
        <!-- 热门文章/标签/友链 -->
        <div class="aside" v-show="!isDetail">
            <el-card class="card">
                <h3>热门文章 <fire theme="outline" size="16" fill="#ee8f8f" /></h3>
                <ul class="hot_article">
                    <li>1. 判断能否成功返回上一页</li>
                    <li>2. 判断能否成功返回上一页</li>
                    <li>3. 判断能否成功返回上一页</li>
                    <li>4. 判断能否成功返回上一页</li>
                    <li>5. 判断能否成功返回上一页</li>
                </ul>
            </el-card>
            <el-card class="card">
                <h3>热门标签 <tag theme="outline" size="16" fill="#f0a01c" /></h3>
                <div class="tag_list">
                    <el-check-tag checked type="info">Tag 3</el-check-tag>
                    <el-check-tag type="info">Tag 3</el-check-tag>
                    <el-check-tag type="info">Tag 3</el-check-tag>
                    <el-check-tag type="info">Tag 3</el-check-tag>
                    <el-check-tag type="info">Tag 3</el-check-tag>
                    <el-check-tag type="info">Tag 3</el-check-tag>
                </div>
            </el-card>
            <el-card class="card">
                <h3>友链 <link-two theme="outline" size="16" fill="#4a90e2" /></h3>
                <div class="friend_link" v-for="item in 4">
                    <el-avatar shape="square" :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                    <div class="name">
                        <h4>万能的网友</h4>
                        <p>——精通各种前端技术</p>
                    </div>
                </div>
            </el-card>
        </div>
        <!-- 文章详情 -->
        <div class="center" v-show="isDetail">
            <el-card class="card detail">
                <el-page-header @back="goBack" :icon="ArrowLeft" content="detail" />
            </el-card>
            <el-card class="card detail">
                <div class="default-theme" ref="artContent" v-html="htmltext"></div>
            </el-card>
            <el-card class="card">
                <Comments></Comments>
            </el-card>
            <md-editor editorId="my-editor" v-model="text" :preview="false" code-theme="atoms" @onHtmlChanged="saveHtml" @onGetCatalog="onGetCatalog" />
        </div>
        <div class="aside" v-if="isDetail && state.catalogList.length">
            <el-card class="card">
                <h3>目录</h3>
                <ul>
                    <li v-for="item in state.catalogList" :class="item.level == 2 ? 'title2' : 'title3'" @click="goAnchor(item.text)">
                        {{ item.text }}
                    </li>
                </ul>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from "@element-plus/icons-vue"
import { Comment, PreviewOpen, Calendar, Tag, Fire, LinkTwo, AllApplication } from "@icon-park/vue-next"
import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"
import Comments from "@C/Comments.vue"
import { getArticle } from "../../api/blogApi"
console.log(getArticle);
getArticle("/getClassification").then((res: any) => {
    console.log(res)
})
const radio1 = ref("全部分类")

MdEditor.config({
    editorExtensions: {
        highlight: {
            css: {
                atoms: {
                    light: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/vs2015.min.css",
                    dark: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/vs2015.min.css",
                },
            },
        },
    },
})
const state: any = reactive({
    catalogList: [],
})
const onGetCatalog = (list: []) => {
    state.catalogList = list
    console.log(state.catalogList)
}

const goAnchor = (selector: any) => {
    document.getElementById(selector)?.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
}

const text = ref("Hello Editor!")
const isDetail = ref(false)
const menuList = reactive([
    {
        name: "全部分类",
        type: "all",
        count: "88",
    },
    {
        name: "Html",
        type: "html",
        count: "18",
    },
    {
        name: "Css",
        type: "css",
        count: "8",
    },
    {
        name: "Javascript",
        type: "js",
        count: "28",
    },
    {
        name: "Vue",
        type: "vue",
        count: "33",
    },
    {
        name: "Node",
        type: "ndoe",
        count: "2",
    },
])
const route = useRoute()
const router = useRouter()
const currentClass = computed(() => {
    return route.query.currentClass
})
const htmltext = ref("")
const saveHtml = (h: string) => {
    htmltext.value = h
}
const goBack = () => {
    isDetail.value = false
    // router.go(-1)
}
</script>

<style lang="scss" scoped>
.card {
    margin-bottom: 20px;
    h3 {
        font-size: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e7eaec;
        margin-bottom: 10px;
    }
}
.title2 {
    font-weight: bold;
    font-size: 14px;
    @include textEllipsis(1);
}
.title3 {
    text-indent: 1em;
    font-size: 12px;
    @include textEllipsis(1);
}

.blog {
    padding: 20px;
    display: flex;
    overflow-y: auto;
    height: 100%;
}
.menu {
    width: 280px;
    position: fixed;
    transition: all 0.5s;

    li {
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        position: relative;
        color: #666;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        cursor: pointer;
        &:hover {
            @extend .active;
        }
    }
    .count {
        font-size: 14px;
        margin-left: 10px;
        color: #aaa;
        font-weight: bold;
        text-decoration: underline;
    }
}
.active {
    color: #333;
    background-color: #eee;
    .count {
        color: #666;
    }
}
.menu2 {
    display: none;
}
.center {
    flex: 1;
    margin: 0 300px;

    .list {
        position: relative;
        height: 182px;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 0px 12px rgba(42, 228, 219, 0.3);
        }

        .description {
            display: flex;
            .left {
                flex: 1;
                color: #aaa;
                font-size: 13px;
                line-height: 22px;
                margin: 5px 0;
                height: 66px;
                @include textEllipsis(3);
            }
            .right {
                width: 76px;
                margin-left: 15px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                }
            }
        }
        .correlation {
            font-size: 13px;
            display: flex;
            white-space: nowrap;
            color: #aaa;
            align-items: center;
            // justify-content: center;
            .item {
                margin-left: 5px;
                margin-right: 20px;
            }
        }
    }
    .detail {
        margin-bottom: 10px;
    }
    :deep(.pagination) {
        justify-content: center;
        li,
        .btn-prev,
        .btn-next {
            background-color: #fff;
        }
    }
}
.aside {
    color: #666;
    width: 280px;
    position: fixed;
    transition: all 0.5s;
    right: 20px;
    .card {
        li {
            line-height: 30px;
            border-radius: 4px;
            cursor: pointer;
            &:hover {
                @extend .active;
            }
        }
    }
    .hot_article {
        font-size: 14px;
        color: #666;
    }
    .tag_list {
        .el-check-tag {
            margin: 0 10px 10px 0;
        }
    }
    .friend_link {
        display: flex;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
            h4 {
                color: #409eff;
            }
        }
        .name {
            margin-left: 10px;
            font-size: 14px;
            font-weight: bold;
            line-height: 20px;
            color: #666;
            p {
                font-size: 12px;
                color: #aaa;
            }
        }
    }
}
@media screen and (max-width: 1366px) {
    .menu,
    .aside {
        width: 240px;
        transition: all 0.5s;
    }
    .center {
        margin: 0 260px;
        transition: all 1s;
    }
}
@media screen and (max-width: 1100px) {
    .aside {
        display: none;
    }
    .center {
        margin-right: 0px !important;
    }
}
@media screen and (max-width: 1024px) {
    .menu {
        display: none;
        transition: all 1s;
    }
    .menu2 {
        display: block;
        transition: all 1s;
    }
    .center {
        margin-left: 0px !important;
    }
}
</style>
