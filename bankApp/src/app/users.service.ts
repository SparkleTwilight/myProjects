import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //uri = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  addUsers(username, password, first_name, last_name){
    const obj = {
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name
    };
    console.log(obj);
    this.http.post('http://localhost:3000/users/add', obj).subscribe(res => console.log('Done'));
  }
}
