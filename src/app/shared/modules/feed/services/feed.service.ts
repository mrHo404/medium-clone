import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

import {environment} from '../../../../../environments/environment'
import {GetFeedResponseInterface} from '../types'

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const baseUrl = environment.apiUrl + url

    return this.http.get<GetFeedResponseInterface>(baseUrl)
  }
}
