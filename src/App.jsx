import { useDispatch, useSelector } from "react-redux";
import {
	addContact,
	deleteContact,
	selectContacts,
} from "./redux/contactsSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {
	const dispatch = useDispatch();

	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectNameFilter);

	const handleAddContact = (newContact) => {
		dispatch(addContact(newContact));
	};

	const handleDeleteContact = (contactId) => {
		dispatch(deleteContact(contactId));
	};

	const handleFilterChange = (e) => {
		dispatch(changeFilter(e.target.value));
	};

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div className={s.container}>
			<h1 className={s.headerTitle}>Phonebook</h1>
			<ContactForm addContact={handleAddContact} />
			<SearchBox filter={filter} onFilterChange={handleFilterChange} />
			<ContactList
				onDeleteContact={handleDeleteContact}
				contacts={filteredContacts}
			/>
		</div>
	);
};

export default App;
