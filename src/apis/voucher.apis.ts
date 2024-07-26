import { SuccessResponse, SuccessResponsePage } from "../types/auth.type";
import { IDetailPost, IPost } from "../types/post.type";
import { IMyVoucher, IVoucher } from "../types/voucher.type";
import { httpWithToken } from "../utils/http";

const URL_GET_LIST_VOUCHER = "voucher/get-list-voucher";
const URL_GET_LIST_MY_VOUCHER = "voucher/get-list-my-voucher";
const URL_UPDATE_VOUCHER = "voucher/redeem-voucher?voucher_id=";
const voucherApis = {
  getListVoucherChange() {
    return httpWithToken.get<SuccessResponse<IVoucher[]>>(
      `${URL_GET_LIST_VOUCHER}`
    );
  },
  getListMyVoucher() {
    return httpWithToken.get<SuccessResponse<IMyVoucher[]>>(
      `${URL_GET_LIST_MY_VOUCHER}`
    );
  },
  updateVoucher(id: number) {
    return httpWithToken.post<SuccessResponse<IMyVoucher[]>>(
      `${URL_UPDATE_VOUCHER}${id}`
    );
  },
};
export default voucherApis;
