import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

  buscar(texto: string) {
    return this.http.get<any[]>(`${Config.apiUrl}/buscar?q=${texto}`);
  }

  getFavoritos() {
    return JSON.parse(localStorage.getItem('favoritos') || '[]');
  }

  guardarFavorito(item: any) {
    const favs = this.getFavoritos();
    favs.push(item);
    localStorage.setItem('favoritos', JSON.stringify(favs));
  }
}