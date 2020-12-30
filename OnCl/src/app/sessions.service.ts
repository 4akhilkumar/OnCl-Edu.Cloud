import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  uri = 'http://localhost:4000';

  constructor(private http:HttpClient) {
  }

  getRecords(id){
    return this.http.get(`${this.uri}/sessions/${id}`);
  }

  addRecord(student) {
    return this.http.post(`${this.uri}/sessions/add`, student);
  }

  deleteRecord(id) {
    return this.http.delete(`${this.uri}/sessions/delete/${id}`);
  }

  getRecordById(id){
    return this.http.get(`${this.uri}/sessions/session/${id}`);
  }

  updateRecord(id,student){
    return this.http.patch(`${this.uri}/sessions/edit/${id}`,student);
  }

}