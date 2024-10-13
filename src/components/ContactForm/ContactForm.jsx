import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import { useState } from "react";
import s from "./ContactForm.module.css";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newContact = { id: nanoid(), name, number };
		dispatch(addContact(newContact));
		setName("");
		setNumber("");
	};

	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<label htmlFor="name">Name</label>
			<input
				type="text"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Name"
			/>
			<label htmlFor="number">Number</label>
			<input
				type="text"
				id="number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				placeholder="Number"
			/>
			<button type="submit" className={s.submitButton}>
				Add Contact
			</button>
		</form>
	);
};

export default ContactForm;
