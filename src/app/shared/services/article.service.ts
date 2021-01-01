import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {ArticleInterface, GetArticleResponseInterface} from '../types'
import {environment} from 'src/environments/environment'

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const baseUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http.get<GetArticleResponseInterface>(baseUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article
      })
    )
  }
}
