import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {
  ArticleInputInterface,
  ArticleInterface,
  SaveArticleResponseInterface,
} from '../../shared/types'
import {environment} from 'src/environments/environment'

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}
  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}`

    return this.http.put<SaveArticleResponseInterface>(url, articleInput).pipe(
      map((response: SaveArticleResponseInterface) => {
        return response.article
      })
    )
  }
}
