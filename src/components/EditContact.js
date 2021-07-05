import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';

const EditContact = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");

    const {id} = useParams();
    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(currentContact){
            setname(currentContact.name);
            setemail(currentContact.email);
            setnumber(currentContact.number)
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === number && number);

        if(!email || !name || !number){
            return toast.warning("Please fill all the fields")
        }

        // if(checkEmail){
        //     return toast.error("Email taken already")
        // }

        // if(checkNumber){
        //     return toast.error("Number taken already")
        // }

        const data = {
            id: parseInt(id),
            name: name,
            email: email,
            number: number
        };
        dispatch({type: "EDIT_CONTACT", payload: data})
        toast.success("Contact updated successfully");
        history.push("/")
    }

    return (
        <div className="container">
            {currentContact ? 
            <>
            (<div className="row">
                <h1 className="display-3 text-center">
                    Edit Contact {id+1}
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
                            <input type="submit" value="Edit Contact" className="btn btn-block btn-dark" style={{marginRight: "15px"}}/>
                            <Link to="/" className="btn btn-danger">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>)</> : (<h1 className="display-3 text-center">
                    Edit Contact {id} does not exist
                </h1>)}           
        </div>
    )
}

export default EditContact
