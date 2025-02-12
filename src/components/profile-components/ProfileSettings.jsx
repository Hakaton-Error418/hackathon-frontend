import { Component } from 'react'
import { NavLink } from 'react-router'

export default class SettingsButton extends Component {
  render() {
    return (
            <div className='flex justify-center items-center h-11.5 mt-6  md:block  md:mt-10 xl:mt-12 md:h-auto md:bg-grey-light md:rounded-xl md:shadow-sm md:shadow-shadow'>
                <NavLink to='/setting' className="text-center bg-grey-light rounded-xl shadow-sm shadow-shadow" >
                  <p className='text-xs pt-3 pb-3 pr-5 pl-6 w-48.75 md:text-2xl md:w-auto xl:text-5xl xl:pt-9 xl:pr-6 xl:pb-9 xl:pl-7.5'>Редагувати профіль</p>
                </NavLink>
            </div>
        
      
    )
  }
}