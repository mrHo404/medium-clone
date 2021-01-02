import {ProfileInterface} from 'src/app/shared/types'
import {ArticleInputInterface} from './articeInput.interface'

export interface ArticleInterface extends ArticleInputInterface {
  slug: string
  createdAt: string
  updatedAt: string
  author: ProfileInterface
  favourited: boolean
  favoritesCount: number
}
