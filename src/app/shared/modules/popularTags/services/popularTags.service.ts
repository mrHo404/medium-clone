import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {PopularTagType} from 'src/app/shared/types'

import {environment} from '../../../../../environments/environment'
import {GetPopularTagsResponseInterface} from '../types'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(url: string): Observable<PopularTagType[]> {
    const baseUrl = environment.apiUrl + url

    return this.http.get<GetPopularTagsResponseInterface>(baseUrl).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags
      })
    )
  }
}
