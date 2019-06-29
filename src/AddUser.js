import React, {useState}  from "react"

const UserList = ({onSubmit}) => {    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    
    const resetForm = () => {
        setName('')
        setEmail('')
        setNameError(null)
        setEmailError(null)
    }

    const validateInput = () => {
        let nameTest = name.split(' ').length > 1
        let emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
        
        if(nameTest && emailTest) {
            let user = {name, email}
            onSubmit(user)
            resetForm()
        } else {
            if(!nameTest) {
                setNameError(true)
            }
            if(!emailTest) {
                setEmailError(true)
            }
        }
    }

    return (
        <div>
            <div>Add User</div>  
            <input type="text" name="first-name" value={name} onChange={(e)=>{setName(e.target.value)}} /> 
            { nameError && <span>Must have first and last name</span>}
            <br/>
            <input type="text" name="last-name" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> 
            { emailError && <span>Invalid Email</span>}
            <br/>
            <button onClick={validateInput}>Add User</button>
        </div>
    )
}

export default UserList
