import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  url = 'https://oncl.herokuapp.com';

  constructor(private http:HttpClient) {
  }

  getRecords(id){
    return this.http.get(`${this.url}/timetable/${id}`);
  }

  addRecord(student) {
    return this.http.post(`${this.url}/timetable/add`, student);
  }

  deleteRecord(id) {
    return this.http.delete(`${this.url}/timetable/delete/${id}`);
  }

  getRecordById(id){
    return this.http.get(`${this.url}/timetable/timetable/${id}`);
  }

  updateRecord(id,student){
    return this.http.patch(`${this.url}/timetable/edit/${id}`,student);
  }

}