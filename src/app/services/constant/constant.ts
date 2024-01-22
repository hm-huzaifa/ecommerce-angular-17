import {HttpHeaders} from "@angular/common/http";

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
});

export const Constant = {
  API_END_POINT: 'http://freeapi.miniprojectideas.com/api/BigBasket',
  METHOD: {
    GET_ALL_PRODUCTS: 'GetAllProducts',
    GET_ALL_CATEGORY: 'GetAllCategory',
    CREATE_PRODUCT: 'CreateProduct',
  },
  HEADERS: headers,
}

