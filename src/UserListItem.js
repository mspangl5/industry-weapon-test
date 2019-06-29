import React from "react"

const UserListItem = ({user}) => {   
    const checkBiz = () => {
        return user.email.slice(-4) === '.biz'
    }

    return <li className={checkBiz() ? "green-text" : null} key={user.id}> {user.name} </li>
}

export default UserListItem
