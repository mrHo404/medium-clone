import {AuthStateInterface} from '../../auth/types'
import {FeedStateInterface} from '../modules/feed/types'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
}
