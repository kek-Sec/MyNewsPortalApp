import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class GetNewsService {

  constructor(private http:HttpClient) { }

  getNews(): Observable<JSON> {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=74ce1a9a332d4f18ba349f36cb59f29f`;
    return this.http
      .get<JSON>(url)
      .pipe(tap((_) => console.log(`got response!`)));
  }
}
