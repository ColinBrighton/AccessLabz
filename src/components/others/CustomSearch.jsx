import React from 'react'
import { SearchBarHolder } from '@components/others/Style'
import { Input } from 'antd'
import { images } from '@assets/images'

const CustomSearch = ({search,update,searchQuery}) => {

  const OnChangeFunction = (e)=>{
    update(e.target.value)
  }

  return (
    <SearchBarHolder>
        <input className="input" onChange={(e)=>OnChangeFunction(e)} value={searchQuery} />
        <div className="search" onClick={search}>
            <img src={images.SEARCH} alt='searchicon' title='searchicon'/>
        </div>
    </SearchBarHolder>
  )
}

export default CustomSearch
