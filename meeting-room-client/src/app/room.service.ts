import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseURL = "http://localhost:8087/api/v1/rooms"

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`)
  }

  createRoom(room: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, room);
  }

  updateRoom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }

  getRoomList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
}
