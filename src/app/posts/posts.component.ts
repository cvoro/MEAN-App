import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Task} from '../Task';

@Component({
  moduleId: module.id,
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  tasks: Task[];
  title: string;

  constructor(private postService: PostService) { 
    this.postService.getPosts().subscribe(
      tasks => {
        this.tasks = tasks;
      }
    )
  }

  ngOnInit() {
  }

addPost(event){
  event.preventDefault();
  var newPost = {
    title: this.title,
    isDone: false
  }
    this.postService.addPost(newPost).subscribe(task=>{
            this.tasks.push(task);
            this.title = "";
    })
  }

deletePost(id,i){
  var tasks = this.tasks;
  this.postService.deletePost(id).subscribe(data=>{
          tasks.splice(i, 1);        }
  )
}
updateStatus(task){
  var _task ={
    _id: task._id,
    title: task.title,
    isDone: !task.isDone
  }
  this.postService.updateStatus(_task).subscribe(data =>{
    task.isDone = !task.isDone;
  })
}

}
