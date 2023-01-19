import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  posts$!: Observable<any[]>;
  constructor(private postsService: PostService) {}
  ngOnInit() {
    this.posts$ = this.postsService.getPosts();
  }
}
