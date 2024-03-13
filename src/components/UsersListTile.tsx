import { useState } from "react";
import img1 from "../assets/8.jpg"
import img2 from "../assets/6.jpg"
import img3 from "../assets/7.jpg"
import UserListTile from "./UserListTile";

 function UsersListTile()
{
    const [state,setState]=useState({ // déclaration de state qui est composé d'un attribut selectedIndex 
        selectedIndex:0
    })

    const usersList=[ //liste des données des utilisateurs
        {
            id:1,
            name:"John Doe",
            email:"john.doe@gmail.com",
            imgurl:img1
        },
        {
            id:2,
            name:"Alex Ray",
            email:"alex.ray@gmail.com",
            imgurl:img2
        },
        {
            id:3,
            name:"Kate Hunington",
            email:"kate.hunington@gmail.com",
            imgurl:img3
        }

    ]
    return ( 
        <>
        <div className="d-flex row">
            <ul className="list-group list-group-light">
 
        {usersList.map((item,i)=>{
           return(
            <div key={i+1} onClick={()=>setState({selectedIndex:i})}>
                <UserListTile user={item} selectedIndex={state.selectedIndex} index={i}/>
            </div>
          )
        })}
        
        </ul>
        </div>
        <div className="">
             <h4 style={{textDecoration:"underline"}}>Current User:</h4>
            <p>Name: {usersList[state.selectedIndex].name}</p>
            <p>Email: {usersList[state.selectedIndex].email}</p>
        </div>
    </>
     );
}
export default UsersListTile