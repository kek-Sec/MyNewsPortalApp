import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetNewsService } from '../get-news.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private NewsService:GetNewsService) { }

  news_items:JSON;
  Titles:Array<String> = new Array<String>(10);
  Images:Array<String> = new Array<String>(10)
  Text:Array<String> = new Array<String>(10);
  Dates:Array<String> = new Array<String>(10);
  URLS:Array<String>= new Array<String>(10);

  ngOnInit(): void {
    this.getLatestBBCHeadlines();
  }

  getLatestBBCHeadlines()
  {
    this.NewsService.getNews().subscribe(data => {
      this.news_items = data;
      console.log(data);
      this.createArrays(this.news_items);
    })
  }

  createArrays(news_items:JSON)
  {
    for(let article in news_items['articles'])
    {
      this.Titles[article] = news_items['articles'][article]['title'];
      this.Dates[article] = news_items['articles'][article]['publishedAt'];
      this.URLS[article] = news_items['articles'][article]['url'];
      this.Text[article] = news_items['articles'][article]['description'];
      this.Images[article] = news_items['articles'][article]['urlToImage'];
    }
  }

}
