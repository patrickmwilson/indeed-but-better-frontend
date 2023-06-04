import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Application} from "./application";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllApplications(): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(environment.baseUrl + "applications/all", { headers: headers, withCredentials: false});
  }

  getApplicationsByJobListingId(jobListingId : number): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(environment.baseUrl + "applications/job-listings/" + jobListingId, { headers: headers, withCredentials: false});
  }

  getApplicationsByUserId(userId : number): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(environment.baseUrl + "applications/users/" + userId, { headers: headers, withCredentials: false});
  }

  createApplication(application : Application, userId: number, jobListingId: number): Observable<any> {
    var headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(environment.baseUrl + "applications/users/" + userId + "/job-listings/" + jobListingId + "/create", JSON.stringify(application), { headers: headers, withCredentials: false, responseType: 'text' });
  }
}
