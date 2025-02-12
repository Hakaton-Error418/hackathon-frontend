import { Component } from 'react'
import { Lia500Px } from 'react-icons/lia'
export default class Achivments_card extends Component {
  render() {
    const {name} = this.props
    return (
    <li className='
    flex gap-3 pt-3 pb-3 pr-[9px] pl-[11px] items-center shadow-shadow rounded-2xl shadow-[4px_4px_4px_1px_rgba(0,0,0,0.25)]
        md:gap-[62px] md:pt-2 md:pb-2 md:pr-[90px] md:pl-[50px]
        xl:w-[400px] xl:pr-[11px] xl:pl-[36px] xl:pt-8 xl:pb-[18px]
    '>
        <svg className='w-7 h-8.5 md:w-[44px] md:h-[60px]'>
            <use href="../../src/img/achivments.svg#achivments"></use>
        </svg>
        <p className='text-[12px] md:text-[20px] xl:text-[20px]'>{name}</p>
    </li>
        
      
    )
  }
}