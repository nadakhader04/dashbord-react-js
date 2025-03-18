
const UserAvatarImg = (props) =>{
    return (
        <div className={`userImg ${props.lg ===true && 'lg'}`}>
            <span className="rounded-circle">
                <img src={props.img}></img>
            </span>
        </div>
    )
}

export default UserAvatarImg;