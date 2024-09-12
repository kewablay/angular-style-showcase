import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Data, Gear, Location } from '../models/data.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  gears: Gear[] = [];
  locations: Location[] = [];

  constructor(private http: HttpClient) {}

  getData(): Observable<Data> {
    return this.http.get<Data>(environment.apiUrl);
  }
}
