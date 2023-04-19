import React from 'react'
import { Link } from 'react-router-dom'

const WorkItems = ({ item }) => {
  return (
    <a href={item.link} className="work__button">
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </div>
    </a>
  )
}

export default WorkItems