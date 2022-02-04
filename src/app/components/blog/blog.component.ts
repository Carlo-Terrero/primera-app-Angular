import { Component, OnInit,  } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  constructor(
    private _ArticleService: ArticleService
  ) {
    
  }

  ngOnInit(): void {
    // Con el methodo subscribe del observable nos permite recoger los datos que nos devuelve la petición
    this._ArticleService.getArticles().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error)
      }
    );
  }

}
