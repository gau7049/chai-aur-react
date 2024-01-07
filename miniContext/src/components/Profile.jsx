import React, {useContext} from "react";
import UserContext from "../user/UserContext";

function Profile(){

    const {user} = useContext(UserContext)

    if (!user) return <div>PLease Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile;
