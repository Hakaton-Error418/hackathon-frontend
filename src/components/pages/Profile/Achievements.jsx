import { Component } from "react";
import Achivments_card from "../../profile-components/AchiveCard";

let ach = []; 

export default class Achivments extends Component {
  render() {
    return (
      <div className="shadow-[0px_-4px_4px_rgba(0,0,0,0.25)] rounded-3xl mt-2.5 md:mt-[23px]">
          <ul className="flex flex-col gap-[20px] pt-[19px] pb-[19px] 
          md:gap-[24px] md:pt-[31px]
          xl:gap-[35px] xl:pt-[51px] xl:flex-row xl:flex-wrap xl:justify-center xl:items-center" >
            {ach.length > 0 ? (
              ach.map((achuve) => <Achivments_card  name={achuve} />)
            ) : (
              <></>
            )}
        <Achivments_card  name='Ви зараєструвались та ввійшли в аккаунт'/>
          </ul>
      </div>
    );
  }
}
