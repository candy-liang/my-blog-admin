export interface MyResponseType<T = any> {
  code: number;
  msg: string;
  data: T;
}

import axios, { AxiosRequestConfig } from "axios";
import config from "@/config";
import { Toast } from "vant";
import router from "@/router";
import storage from "@/utils/storage";

const TOKEN_INVALID = "请登录账号";
const NETWORK_ERROR = "网络请求异常，请稍后重试";

// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
});

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，请稍后再试。",
  504: "网关超时。",
};

// 请求拦截
service.interceptors.request.use((req: any) => {
  // alert(req);
  // if (req.showLoading) {
  //   Toast.loading({
  //     message: "加载中...",
  //     forbidClick: true,
  //     loadingType: "spinner",
  //   });
  // }

  const headers: any = req.headers;

  //是否自定义token
  if (config.customToken.isOpen && config.env !== "prod") {
    const { token = "" } = config.customToken.child || {};
    if (!headers.authorization) headers.authorization = token;
    storage.setItem("loginInfo", config.customToken.child);
    return req;
  } else {
    const { token = "" } = storage.getItem("loginInfo") || {};
    if (!headers.authorization) headers.authorization = token;
    return req;
  }
});

// 响应拦截
service.interceptors.response.use(
  (res: any) => {
    // setTimeout(() => {
    //   Toast.clear();
    // }, 1000);

    const { code, data, msg } = res.data;
    if (code === 200) {
      return data as any;
    } else if (code === 401) {
      Toast.fail(TOKEN_INVALID);

      setTimeout(() => {
        router.push("/login");
      }, 500);
      return Promise.reject(TOKEN_INVALID);
    } else {
      Toast.fail(msg || NETWORK_ERROR);
      return Promise.reject(msg || NETWORK_ERROR);
    }
  },
  (error: any) => {
    if (error.response) {
      const { status } = error.response;
      if (status) {
        const errorText = codeMessage[status];
        Toast.fail(`${errorText}`);
      }
    } else {
      Toast.fail("请求失败！");
    }

    return Promise.reject(NETWORK_ERROR);
  }
);
/**
 * 请求核心函数
 * @param {*} options 请求配置
 */

function request(options: AxiosRequestConfig | any) {
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }
  // if (config.method === "post") {
  //   options.params = Qs.stringify(config.data);
  // }

  let isMock = config.mock;
  if (typeof options.mock != "undefined") {
    isMock = options.mock;
  }
  if (config.env === "prod" || config.env === "testBuild") {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }

  return service(options);
}
let methods: string[] = ["get", "post", "put", "delete", "patch"];
methods.forEach((item) => {
  request[item] = (url: string, data: object | undefined, options: any) => {
    return request({
      url,
      data,
      method: item,
      ...options,
    });
  };
});

export default request;
