import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  url = 'https://oncl.herokuapp.com';

  constructor(private http:HttpClient) {
  }

  getRecords(id){
    return this.http.get(`${this.url}/sessions/${id}`);
  }

  addRecord(student) {
    return this.http.post(`${this.url}/sessions/add`, student);
  }

  deleteRecord(id) {
    return this.http.delete(`${this.url}/sessions/delete/${id}`);
  }

  getRecordById(id){
    return this.http.get(`${this.url}/sessions/session/${id}`);
  }

  updateRecord(id,student){
    return this.http.patch(`${this.url}/sessions/edit/${id}`,student);
  }

}