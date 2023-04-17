import { Injectable } from '@angular/core';
import {Payments} from "../models/payments.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor (private http: HttpClient) {}

  create(widget: Payments): Observable<Payments> {
    return this.http.post<Payments>(this.getUrl(), widget);
  }
  getAll(): Observable<Payments[]> {
    return this.http.get<Payments[]>(this.getUrl());
  }
  private getUrl() {
    return `http://localhost:3000/payments`;
  }
}
