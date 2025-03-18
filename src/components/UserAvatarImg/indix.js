
const UserAvatarImg = (props) =>{
    return (
        <div className={`userImg ${props.lg ===true && 'lg'}`}>
            <span className="rounded-circle">
                <img src="https://i.pinimg.com/736x/d4/fd/e8/d4fde837765f365f2d76f6bc406b4cb0.jpg"></img>
            </span>
        </div>
    )
}

export default UserAvatarImg;