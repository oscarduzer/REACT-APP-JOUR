import IUser from "../interfaces/IUser"



interface Props{
  user:IUser
  selectedIndex:number
  index:number
}


/* 
 'props' un paramettre qui va reprsenté l'ensemble des données  qu'on désire manipulé
 dans notre cas c'est 'user' un objet qui a un name,image(imgurl) et email
  */


function UserListTile(props:Props) {
    const {user,selectedIndex,index}=props
    return(
        <>
             <li className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${selectedIndex==index?"active":""}`}>
        <div className="d-flex align-items-center">
          <img src={user.imgurl} alt="" style={{width: "45px", height: "45px"}}
            className="rounded-circle" />
          <div className="ms-3">
            <p className="fw-bold mb-1">{user.name}</p>
            <p className="text-muted mb-0">{user.email}</p>
          </div>
        </div>
        <a className="btn btn-link btn-rounded btn-sm" href="#" role="button">View</a>
      </li>
        
        </>
 
    )
}
export default UserListTile;