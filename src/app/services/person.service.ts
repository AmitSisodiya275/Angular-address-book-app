import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiUrl:string=environment.baseUrl;

  
  constructor(private http:HttpClient) { }

  getAllPerson():Observable<Person[]>{
    return this.http.get<Person[]>(`${this.apiUrl}/get`);
  }

  addPerson(person:Person):Observable<Person>{
    return this.http.post<Person>(`${this.apiUrl}/add`, person);
  }

  deletePerson(id:number){
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
  }
}
