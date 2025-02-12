import ProfileButton from "../profile-components/ProfileButton"
export const Profile = () => {
    return (
        <ul className="flex flex-wrap gap-3 items-center justify-center mt-8.75 md:mt-10 md:gap-15 xl:gap-20 xl:mt-16.75"> 
            <ProfileButton name={"Досягнення"} src={'/achievements'} svg={'./src/img/achivments.svg#achivments'} w={28} h={32}/>
            <ProfileButton name={"Рейтинг"} src={'/rating'} svg={'./src/img/star.svg#star'} w={30} h={30}/>
            <ProfileButton name={"Квести"} src={'/quests'} svg={'./src/img/kvest.svg#quest'} w={34} h={34}/>
            <ProfileButton name={"Історія "} src={'/history'} svg={'./src/img/history.svg#history'} w={40} h={40}/>
        </ul>
    )
}
