import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

  constructor(private http: HttpClient) { }

  async getData() {

    let data = [];
    await this.http.get<[]>(this.url).toPromise().then((res) => {
      data = res['civilizations'];
    }).catch(err => console.log('Error al obtener los datos'))

    return data;
  }
}
