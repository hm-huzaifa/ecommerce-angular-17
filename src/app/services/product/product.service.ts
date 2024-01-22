import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: any;

  constructor(private http: HttpClient) {
  }

  getCategory() {
    console.log("Get Categories...")
    // return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_CATEGORY, requestOptions)
    this.data = this.http.get("http://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory")
    console.log("Categories: ", this.data)
    return this.data
  }

  getProducts() {
    console.log("Get Product...")
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_PRODUCTS)
  }

  saveProduct(productObject: any) {
    console.log("Save Product...")
    // console.log("headers: ", Constant.HEADERS.headers);
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.CREATE_PRODUCT)
  }
}
