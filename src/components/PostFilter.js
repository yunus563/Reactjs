import React from 'react'

import MySelect from './library/Select/mySelect'
import MyInput from './library/Input/myInput'

const PostFilter = ({filter, setFilter}) => {

  return (
    <div style={{display:'flex', alignItems:'center'}}>
        <MyInput 
          placeholder={"Search"}
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}  
        />
        <MySelect 
          defaultValue={'filtering'}
          value={filter.sort}
          onChange={(e)=> setFilter({...filter, sort:e})}
          options={[
            {value:'title', name:'filtering title'},
            {value:'body', name:'filtering body'}
          ]}
        />
      </div>
  )
}

export default PostFilter