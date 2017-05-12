import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http) {
    console.log("task service initialized..")
   }

     getPosts(){
    return this.http.get('http://localhost:3000/api/tasks')
      .map(res => res.json());
  }

  addPost(newTask){
    console.log
    (newTask);
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/api/task', JSON.stringify(newTask), {headers: headers})
        .map(res => res.json());
}
  deletePost(id){
    return this.http.delete('http://localhost:3000/api/task/'+id)
        .map(res=>res.json());
  }
  updateStatus(task){
   var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.put('http://localhost:3000/api/task/'+task._id, JSON.stringify(task), {headers: headers})
        .map(res => res.json());

  }


}
