import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === number && number);

        if(!email || !name || !number){
            return toast.warning("Please fill all the fields")
        }

        if(checkEmail){
            return toast.error("Email taken already")
        }

        if(checkNumber){
            return toast.error("Number taken already")
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name: name,
            email: email,
            number: number
        };
        dispatch({type: "ADD_CONTACT", payload: data})
        toast.success("Contact added successfully");
        history.push("/")
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 text-center">
                    Add Contact
                </h1>
                <div className="col-md-6 shadow mx-auto pd-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" style={{ padding: "5px"}} >
                            <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e) => {setname(e.target.value)}} />
                        </div>
                        <div className="form-group" style={{ padding: "5px"}}>
                            <input type="email" placeholder="Email" className="form-control" value={email} onChange={(e) => {setemail(e.target.value)}} />
                        </div>
                        <div className="form-group" style={{ padding: "5px"}}>
                            <input type="text" placeholder="Phone Number"  className="form-control" value={number} onChange={(e) => {setnumber(e.target.value)}}/>
                        </div>
                        <div className="form-group" style={{ padding: "5px"}}>
                            <input type="submit" value="Add Contact" className="btn btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>           
        </div>
    )
}

export default AddContact
