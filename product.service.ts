import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../products/product';
import { map ,catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productDataUrl:string = 'productsData/productsList.json';

  constructor(private httpClient:HttpClient){ }

  public getAllProductDetails(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productDataUrl).pipe(catchError(this.handleError));
  }

  public getProductDetails(productId:number):Observable<Product>{
    return;
  }

  private handleError(error:any) {
    if(error instanceof ErrorEvent){
      console.error('1 An ErrorEvent occured: ',error.error.message);
      return throwError(error.error.message);
    }else if(error instanceof HttpErrorResponse){
      console.error(`2 Backend returned code ${error.status}, body was: ${error.message}`);
      return throwError(`Backend returned code ${error.status}, body was: ${error.message}`);
      }
      else if(error instanceof TypeError){
        console.error(`3 TypeError has occured ${error.message}, body was: ${error.stack}`);
      return throwError(`TypeError has occured ${error.message}, body was: ${error.stack}`);
      }
    }
  }

