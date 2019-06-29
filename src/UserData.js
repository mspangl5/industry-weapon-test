import React, {useEffect, useState} from "react"
import axios from 'axios'

const UserData = ({render, moreUsers}) => {    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(({data}) => {
            setUsers(data);
        })
    }

    const allUsers = [...users, ...moreUsers]
    
    allUsers.sort(function(a , b) {
        return a.name.localeCompare(b.name);
    })

    return render(allUsers);
}

export default UserData