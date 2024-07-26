import { SuccessResponse, SuccessResponsePage } from "../types/auth.type";
import { IDetailPost, IPost } from "../types/post.type";
import { httpWithToken } from "../utils/http";

const URL_NOTI_CUSTOMER = "noti-customer/get-list-noticustomer";
const URL_NOTI_ALL = "noti-customer/get-noti-all?page=";
const URL_NOTI_DETAIL = "noti-customer/get-noti-detail/";
const postApis = {
  getPostHome() {
    return httpWithToken.get<SuccessResponse<IPost[]>>(
      `${URL_NOTI_CUSTOMER}`
    );
  },
  getAllPost(page:number) {
    return httpWithToken.get<SuccessResponsePage<IPost[]>>(
      `${URL_NOTI_ALL}${page}`
    );
  },
  getDetailPost(id: number) {
    return httpWithToken.get<SuccessResponse<IDetailPost>>(
      `${URL_NOTI_DETAIL}${id}`
    );
  },
};
export default postApis;
