import { useSelector } from "react-redux";
import { selectContactsCount } from "redux/contacts/contactsSelectors";
import { CounterText } from "./CounterContacts.styled";

export const CounterContacts = () => {
    const { contacts } = useSelector(selectContactsCount);

    return (
        <div>
            <CounterText>Total contacts: {contacts}</CounterText>
        </div>
    );
};
