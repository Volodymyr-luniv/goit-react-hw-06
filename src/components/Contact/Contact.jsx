import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteContact(id));
	};

	return (
		<li className={s.contact}>
			<p>
				<span>{name}</span>
				<span>{number}</span>
			</p>
			<button className={s.btn} onClick={handleDelete}>
				Delete
			</button>
		</li>
	);
};

export default Contact;
