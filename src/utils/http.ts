import axios, { AxiosInstance, AxiosError } from "axios";
import { API_URL } from "./contanst";
import { toast } from "react-toastify";
interface IRes {
  status: boolean;
  mesage: string;
  code?: number;
}
class Http {
  withToken: AxiosInstance;
  withoutToken: AxiosInstance;

  constructor() {
    // Instance dành cho các API cần token
    this.withToken = axios.create({
      baseURL: API_URL,
      timeout: 40000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Interceptor cho request của instance withToken
    this.withToken.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("access_token");
         console.log("accessTokend",accessToken)
        if (config) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Interceptor cho response của instance withToken
    this.withToken.interceptors.response.use(
      (response: any) => {
        if (response.data.code === 400) {
          localStorage.removeItem("access_token");
          toast.warning("Bạn cần đăng nhập lại");
          window.location.href = "/"; // Chuyển hướng về trang chủ
        } else if (response.data.status === "Authorization Token not found") {
          toast.warning("Bạn cần đăng nhập lại");
        }
        return response;
      },
      (error: AxiosError) => {
        if (error.response) {
          const { status, data }: any = error.response;

          if (status === 401) {
            localStorage.removeItem("access_token");
            console.error("Unauthorized request. Redirecting to login page...");
          }
          toast.warning("Bạn cần đăng nhập lại");
          if (
            status === 400 &&
            data?.message === "Bạn đã hết hạn truy cập mời đăng nhập lại"
          ) {
            toast.warning("Bạn cần đăng nhập lại");
          }
        }
        return Promise.reject(error);
      }
    );

    // Instance dành cho các API không cần token
    this.withoutToken = axios.create({
      baseURL: API_URL,
      timeout: 40000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const http = new Http();

export const httpWithToken = http.withToken;
export const httpWithoutToken = http.withoutToken;
