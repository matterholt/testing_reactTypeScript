import { useState} from 'react'
import "./userForm.css"

import { updateUserSpecs } from '../utils'

const FormStatusView = ({status}: {status: string}) => {
    
    if (status === "error") {
        return (<p data-testId="submitStatus" className="error formStatus">failed</p>)
        }
    if (status === "success") {
        return (<p data-testId="submitStatus" className="success formStatus">Success</p>)
        }
    if (status === "submitting") {
        return( <p data-testId="submitStatus" className="submitting formStatus">Submitting...</p>)
        }
    return null
}


type formProps = {
    username?: string;
}


export default function UserForm({ username="" }: formProps) {
    // TODO -> change to a useReducer that controls the data
    const [user, setUser] = useState(username)
    const [positionTitle, setPositionTitle] = useState('');
    const [responsibility, setResponsibility] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [formStatus, setFormStatus] = useState("idle")

    function handleSubmit(e: any) {
        
        e.preventDefault()
        setFormStatus("submitting")
        setIsActive(false)
        async function updateUser(user: string, updates: {positionTitle:string,responsibility:string}) {
            const updatedUser = await updateUserSpecs(user, updates)
          console.log(updatedUser)
          setFormStatus("success")
        }
        
        updateUser(user , {positionTitle,responsibility})
 
    }
    function resetForm() {
        setIsActive(false)
        setPositionTitle("")
        setResponsibility("")
        setUser("")
    }
    function handleFormValues(e:any) {
        const { name, value } = e.target
        setFormStatus("idle")
        setIsActive(true)
        if (name === "userPositionTitle") {
            setPositionTitle(value)
        }
        if (name === "responsibility") {
            setResponsibility(value)
        }
        if (name === "username") {
            setUser(value)
        }
    }


    return (
        <form className="userForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type='text'
                id="username"
                name="username"
                value={user}
                onChange={handleFormValues}
                disabled= {username ? true : false}
                />
            <label htmlFor="userPositionTitle">Position Title:</label>
            <input
                type="text"
                id="userPositionTitle"
                name="userPositionTitle"
                value={positionTitle}
                onChange={handleFormValues}
            
            />
            <label htmlFor="responsibility">Responsibility</label>
            <textarea
                cols= {10}                
                name="responsibility"
                id="responsibility"
                value={responsibility}
                onChange={handleFormValues}
            />

            
            <div className="formAction">
                <button
                    type="button"
                    onClick={resetForm}
                    disabled = {!isActive}
                >Reset</button>
                <button
                    type="submit"
                    className="submitButton"
                    disabled = {!isActive}
                >Submit</button>
            </div>
            <FormStatusView status={formStatus} />
        </form>
    )
}