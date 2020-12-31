import {AuthStateInterface} from '../../auth/types'
import {FeedStateInterface} from '../modules/feed/types'
import {PopularTagsStateInterface} from '../modules/popularTags/types'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  popularTags: PopularTagsStateInterface
}
