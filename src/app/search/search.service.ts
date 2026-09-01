import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class SearchService {
  constructor(private http: HttpClient){}
  buscar(texto: string){
    return this.http.get<any[]>("https://api.com/buscar?q=" + texto);
  }
}