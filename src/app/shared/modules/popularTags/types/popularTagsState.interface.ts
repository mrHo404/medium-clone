import {PopularTagType} from 'src/app/shared/types'

export interface PopularTagsStateInterface {
  isLoading: boolean
  error?: string | null
  data?: PopularTagType[] | null
}
