import {PopularTagType} from './popularTag.type'

export interface ArticleInputInterface {
  title: string
  body: string
  tagList: PopularTagType[]
  description: string
}
