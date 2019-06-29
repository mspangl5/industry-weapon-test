import React from "react"
import Paginate from './Paginate'
import UserListItem from './UserListItem'

const UserList = ({users}) => {         
    return (
        <Paginate 
            data={users}
            render={user => (<UserListItem user={user} />)}
        />
    )
}

export default UserList
