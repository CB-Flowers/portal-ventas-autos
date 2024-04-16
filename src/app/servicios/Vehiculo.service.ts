import {Injectable} from '@angular/core';
import {Respuesta, Vehiculo} from '../utilitarios/modelos/Vehiculo';
import {Observable, map, observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) {

  }

  baseUrl: string = "http://www.epico.gob.ec/vehiculo/public/api/";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private arregloAutos: Array<Vehiculo> = [];

  /*
  getVehiculos():Observable<Vehiculo[]>{
      return this.http.get<Respuesta>(this.baseUrl+"vehiculos/").pipe(
          map(respuesta=>{
              return respuesta.data;
          })
      );
  }*/

  insertVehiculo(vehiculo: Vehiculo) {
    return this.http.post<Respuesta>(this.baseUrl + "vehiculo/", vehiculo, this.httpOptions)
    /*.pipe(
      map(respuesta=>{
          return respuesta.data;
      })
  );*/
    //return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, this.httpOptions);
  }

  getVehiculo(codigo: string): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.baseUrl + "vehiculo/" + codigo)
    /*.pipe(
      map(respuesta=>{
          return respuesta.data;
      })
      );*/
  }

  actualizarVehiculo(vehiculo: Vehiculo, codigo: string) {
    return this.http.put<Respuesta>(this.baseUrl + "vehiculo/" + codigo, vehiculo, this.httpOptions)
    /*.pipe(
      map(respuesta=>{
          return respuesta.data;
      }));*/
  }

  eliminarVehiculo(codigo: string) {
    return this.http.delete<Respuesta>(this.baseUrl + "vehiculo/" + codigo)
    /*.pipe(
      map(respuesta=>{
          return respuesta.data;
      })
      );
    */
  }

  getVehiculos(filtro?: string, rows?: number, page?: number): Observable<Respuesta> {
    let body = new HttpParams();
    body = filtro ? body.set("filtro", filtro) : body;
    body = rows ? body.set("rows", rows) : body;
    body = page ? body.set("page", page) : body;
    return this.http.get<Respuesta>(this.baseUrl + "vehiculos/", {params: body})
    /*.pipe(
        map(respuesta => respuesta.data),
        //catchError (this.handleError)
    );*/
  }

}
