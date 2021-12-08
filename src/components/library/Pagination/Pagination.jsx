import React from 'react'
import '../../../style/App.css'

import {TotalPagesArray} from '../../../utils/PageSettings'


const Pagination = ({totalPages, page, fetchPage}) => {

  let PagesArray = TotalPagesArray(totalPages)

  return (
    <div className="page__wrapper">
    {PagesArray.map((p) => 
      <span onClick={()=> fetchPage(p)} key={p} className={page === p ? "page page__current" : "page"}>{p}</span>
    )}
  </div>
  )
}

export default Pagination
