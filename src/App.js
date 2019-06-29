import React, {useState}  from "react"
import UserData from './UserData'
import UserList from './UserList'
import AddUser from './AddUser'

const App = () => {
    const [moreUsers, setMoreUsers] = useState([]);

	const addUser = (user) => {
		setMoreUsers([...moreUsers, user]);
	}

	return (
		<div>
			<UserData 
				render={users => (<UserList users={users} />)}
				moreUsers={moreUsers}
			/>
			<AddUser onSubmit={(user)=>{addUser(user)}} />
		</div>
	)
}
export default App
