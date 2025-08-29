import MyProfile from "../MyProfile/MyProfile";
import MyAvatar from "../MyAvatar/MyAvatar";
import { useEffect } from 'react';

export default function Sidebar(props) {
    const {
        isUserMenuOpen,
        closeMenu,
        closeModal,
        user,
        setIsEditProfileActive,
        handleLogout,
        isEditProfileActive,
        isEditAvatarActive,
        setIsEditAvatarActive} = props;
    

    useEffect(() => {
        const handleEscToClose = (e) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        };

        document.addEventListener("keydown", handleEscToClose);
        return () => {
            document.removeEventListener("keydown", handleEscToClose);
        };
    }, [closeMenu]);

    return(
        <>
            <div onClick={closeModal} className={isUserMenuOpen ? 'sidebar__profile' : 'sidebar__profile sidebar__profile_hidden'}>
                <div className='sidebar__container'>
                    <button className='sidebar__close-button' onClick={closeMenu}><p>close</p></button>
                    <div className="sidebar__avatar-wrapper">
                        {/* <img className="sidebar__edit-pencil" src={editPencil}></img> */}
                        <img className='sidebar__profile-pic' alt='profile picture' onClick={() => {setIsEditAvatarActive(true)}} src={user.avatar}></img>                   
                    </div>
                    <MyAvatar isEditAvatarActive={isEditAvatarActive} setIsEditAvatarActive={setIsEditAvatarActive} />
                    {!isEditProfileActive && <p className="sidebar__profile-name">{user.name}</p>}
                    <MyProfile isEditProfileActive={isEditProfileActive} setIsEditProfileActive={setIsEditProfileActive} />
                    <ul>
                        <li><a className="sidebar__profile-link" onClick={() => setIsEditProfileActive(true)}>edit profile</a></li>
                        <li><a className="sidebar__profile-link">past orders</a></li>
                        <li><a className="sidebar__profile-link" onClick={handleLogout}>logout</a></li>
                    </ul>
                </div>
            </div>
        </>        
    )
}