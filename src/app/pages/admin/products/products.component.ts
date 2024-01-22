import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  isSidePanelVisible: boolean = true
  productObject: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  }

  categoryList: any [] = []
  productsList: any [] = []

  constructor(private productServices: ProductService) {
  }

  ngOnInit() {
    this.getAllCategory()
    this.getProducts()
  }

  getProducts() {
    this.productServices.getProducts().subscribe((res: any) => {
      this.productsList = res.data
    })
  }

  getAllCategory() {
    this.productServices.getCategory().subscribe((res: any) => {
      this.categoryList = res.data
    })
  }

  onSave() {
    debugger
    this.productServices.saveProduct(this.productObject).subscribe((res: any) => {
      if (res.result) {
        alert("Product Created")
        this.getProducts()
      } else {
        alert(res.message)
      }
    })
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
    console.log("Panel Opened, Value: ", this.isSidePanelVisible)
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
    console.log("Panel Closed, Value: ", this.isSidePanelVisible)
  }

}
