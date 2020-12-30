import {ProfileInterface} from 'src/app/shared/types'

export interface ArticlesInterface {
  title: string
  slug: string
  body: string
  createdAt: string
  updatedAt: string
  taglist: string[]
  description: string
  author: ProfileInterface
  favourited: boolean
  favoritesCount: number
}
