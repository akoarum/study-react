import * as types from '../types'
import { fetchItems } from '../../request'

export const getItems = async (options: { [index: string]: any } = {}) => {
  const items = await fetchItems(options)
  return {
    type: types.GET_ITEMS,
    items: items.data
  }
}