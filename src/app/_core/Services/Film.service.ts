import { BASE_URL } from './../Utils/setting';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FilmService {
  constructor(private httpClient: HttpClient) {}
  getBannerFilm(): Observable<any> {
    let obser = this.httpClient.get(
      `${BASE_URL}/api/QuanLyPhim/LayDanhSachBanner`
    );
    return obser;
  }
}