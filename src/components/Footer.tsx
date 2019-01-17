import * as React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../store/actions'

const Footer: React.SFC = () => (
  <div>
    <span>SHOW: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer
