import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getCategory() {
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_CATEGORY)
  }

  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_PRODUCTS)
  }

  saveProduct(productObject: any) {
    let headers: { "Access-Control-Allow-Origin": string; accept: string; "Content-Type": string };
    headers = {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json',
      'Access-Control-Allow-Origin': '*'
    };
    return this.http.post(Constant.API_END_POINT + Constant.METHOD.CREATE_PRODUCT, productObject, {headers: headers})
  }

  updateProduct(productObject: any) {
    let headers: { "Access-Control-Allow-Origin": string; accept: string; "Content-Type": string };
    headers = {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json',
      'Access-Control-Allow-Origin': '*'
    };
    return this.http.post(Constant.API_END_POINT + Constant.METHOD.UPDATE_PRODUCT, productObject, {headers: headers})
  }

  deleteProduct(id: any) {
    let headers: { "Access-Control-Allow-Origin": string; accept: string; "Content-Type": string };
    headers = {
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json',
      'Access-Control-Allow-Origin': '*'
    };
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.DELETE_PRODUCT + id, {headers: headers})
  }


}
