import {ArticleStateInterface} from '../../article/types'
import {CreateArticleStateInterface} from '../../createArticle/types'
import {AuthStateInterface} from '../../auth/types'
import {FeedStateInterface} from '../modules/feed/types'
import {PopularTagsStateInterface} from '../modules/popularTags/types'
import {EditArticleStateInterface} from 'src/app/editArticle/types'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  popularTags: PopularTagsStateInterface
  article: ArticleStateInterface
  createArticle: CreateArticleStateInterface
  editArticle: EditArticleStateInterface
}
