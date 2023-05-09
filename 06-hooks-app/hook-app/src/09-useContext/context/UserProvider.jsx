import { UserContext } from "./UserContext";
import { useState } from "react";

// const user = {
//     id: 1234,
//     name: 'Carli',
//     email: 'calirow@gmail.com' 
// }

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

const [user, setUser] = useState({})

    return(
        <UserContext.Provider value={{ user , setUser }}>
            { children }
        </UserContext.Provider>
    )
}
// End of 06-hooks-app\hook-app\src\09-useContext\context\UserProvider.jsx
// Path: 06-hooks-app\hook-app\src\09-useContext\context\UserContext.jsx
// Compare this snippet from 06-hooks-app\hook-app\src\09-useContext\AboutPage.jsx: