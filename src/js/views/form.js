import React, {useState, useContext} from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Form = () => {
	const { actions, store } = useContext(Context);
	const navigate = useNavigate()
    const [data, setData] = useState({
		agenda_slug : "monkeyjp"});
    const handleChange = (event) =>{
        setData({...data, [event.target.name]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(data)
		fetch("https://assets.breatheco.de/apis/fake/contact/", config)
			.then((response) => response.text())
			.catch(error => console.log('error', error))
			.then(response => {
				actions.loadContacts();
				navigate("/");
			});
    }

    return(
        <form className="container" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="imputName" className="form-label">Full Name</label>
				<input type="name" name="full_name" className="form-control" id="imputName" placeholder="Full Name" 
					onChange={(e) => handleChange(e)} 
					/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
				<input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email"
	    			onChange={(e) => handleChange(e)} 
					/>
			</div>
			<div className="mb-3">
				<label htmlFor="inputPhone" className="form-label">Phone</label>
				<input type="phone" name="phone" className="form-control" id="inputPhone"  placeholder="Enter Phone"
					onChange={(e) => handleChange(e)} 
					/>
			</div>
			<div className="mb-3">
				<label htmlFor="inputAddress" className="form-label">Address</label>
				<input type="address" name="address" className="form-control" id="inputAddress"  placeholder="Enter Address"
					onChange={(e) => handleChange(e)}  
					/>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			<Link to={"/"} type="button" className="btn btn-danger">
					Cancel
			</Link>
		</form>
    )
}