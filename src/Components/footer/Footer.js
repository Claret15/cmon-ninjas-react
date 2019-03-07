import React from 'react'
import FilterLink from '../../containers/FilterLink';


const Footer = () => (
  <p>
    Show: <FilterLink >All</FilterLink>
    {', '}
    <FilterLink >Active</FilterLink>
    {', '}
    <FilterLink >Completed</FilterLink>
  </p>
)

export default Footer