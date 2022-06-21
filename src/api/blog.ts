import service from './index';

export const getArticle = (url: string = '', data: any = {}) => service({
    url: "article" + url,
    method: "post",
    data,
})
export const getTags = (url: string = '', data: any = {}) => service({
    url: "tags" + url,
    method: "post",
    data,
})
export const getFriendLink = (url: string = '', data: any = {}) => service({
    url: "friendLink" + url,
    method: "post",
    data,
})
