import { Component, OnInit  } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[] = [];
  public url: string;

  constructor(
    private _ArticleService: ArticleService,
  ){
    this.url = Global.url;
  }

  ngOnInit(): void {
    // Con el methodo subscribe del observable nos permite recoger los datos que nos devuelve la petición
    this._ArticleService.getArticles().subscribe(
      response => {        
        if(response.articles){          
          this.articles = response.articles;
        }else{

        }
      },
      error => {
        console.log(error)
      }
    );
  }

}
