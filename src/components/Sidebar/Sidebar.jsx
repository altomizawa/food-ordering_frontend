import MyProfile from "../MyProfile/MyProfile";

export default function Sidebar(props) {
    const {isUserMenuOpen, closeMenu, user, setIsEditProfileActive, handleLogout, isEditProfileActive} = props;
    return(
        <>
            <div className={isUserMenuOpen ? 'navbar__profile' : 'navbar__profile navbar__profile_hidden'}>
                <div className='navbar__container'>
                    <button className='navbar__close-button' onClick={closeMenu}><p>close</p></button>
                    <img src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x"></img>
                    {!isEditProfileActive && <p className="navbar__profile-name">{user.name}</p>}
                    <MyProfile isEditProfileActive={isEditProfileActive} setIsEditProfileActive={setIsEditProfileActive} />
                    <ul>
                        <li><a className="navbar__profile-link" onClick={() => setIsEditProfileActive(true)}>edit profile</a></li>
                        <li><a className="navbar__profile-link">past orders</a></li>
                        <li><a className="navbar__profile-link" onClick={handleLogout}>logout</a></li>
                    </ul>
                </div>
            </div>
        </>        
    )
}