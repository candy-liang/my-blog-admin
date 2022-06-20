import service from "./request.js";
import QS from "qs";
export default {
    getArticle: function (url, param = {}) {
        return service({
            method: "post",
            url: '/article' + url,
            data: QS(param)
        });
    },
    getTags: function (url, param = {}) {
        return service({
            method: "post",
            url: '/tags' + url,
            data: QS(param)
        });
    },
    getFriendLink: function (url, param = {}) {
        return service({
            method: "post",
            url: '/friendLink' + url,
            data: QS(param)
        });
    },

}