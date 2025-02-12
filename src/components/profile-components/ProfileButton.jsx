import { Component } from 'react'
import { NavLink } from 'react-router'
export default class ProfileButton extends Component {
  render() {
    const {name, svg , src, w,h} = this.props
    return (
      <li className='rounded-xl shadow-sm  shadow-shadow w-36 md:w-65 xl:w-110' >
        <NavLink to={src} className='flex justify-between  gap-0.5 items-center pt-2.5 pb-2.5 pr-2 pl-1.5 md:pt-5.5 md:pl-10 md:pb-6 md:pr-10 md:gap-6 md:justify-normal xl:pt-9 xl:pr-4 xl:pb-7 xl:pl-12 xl:gap-10 '>
          <svg className='w-12.5 h-12.5 xl:w-22.5 xl:h-22.5'>
            <use href={svg}></use>
          </svg>
          <p className='text-lg font-medium md:text-2xl xl:text-5xl'>{name}</p>
        </NavLink>
      </li>
    )
  }
}