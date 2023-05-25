import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan, faPhoneFlip, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	
	const { actions, store } = useContext(Context);
	const navigate = useNavigate();
	//console.log(store.contacts)

	

	return (

		<div className="container">
			
			<div className="contacts">
				<ul >
					{store.contacts.map((contact, index) =>{
						//console.log(contact)
						return(
							<li className="row contact" key={index}>
								<div className="col-md-3 photo">
									<img src="https://www.bentbusinessmarketing.com/wp-content/uploads/2013/02/35844588650_3ebd4096b1_b-1024x683.jpg" className=" rounded-circle " alt="" srcSet="" />
								</div>
								<div className="col-md-7 col-10">
									<div className="name">{contact.full_name}</div>
									<div className="address"><FontAwesomeIcon icon={faLocationDot} className="icon" />{contact.address}</div>
									<div className="phone"><FontAwesomeIcon icon={faPhoneFlip} className="icon" />{contact.phone}</div>
									<div className="email"><FontAwesomeIcon icon={faEnvelope} className="icon" />{contact.email}</div>
								</div>
								<div className="col-md-2 col-2">
									
									<FontAwesomeIcon icon={faPencil} className="col-6" onClick={() =>{
										actions.seeContact(contact);
										navigate("/editForm");

									}}/>
									
									{/* <FontAwesomeIcon icon={faTrashCan} onClick={()=>{actions.deleteContact(contact.id)}} className="col-6" /> */}
									<FontAwesomeIcon icon={faTrashCan} className="col-6" data-bs-toggle="modal" data-bs-target="#exampleModal" 
									onClick={() => {
										actions.contactToDelete(contact);
									}} />

									<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-body">
												Are you sure you want delete {store.contactToDelete.full_name} ? 
											</div>
											<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
												actions.deleteContact(store.contactToDelete.id)
											}}>Delete</button>
											</div>
										</div>
										</div>
									</div>
								</div>
							</li>
						)
					})}
					
				</ul>
			</div>
		</div>
	)
	
};
