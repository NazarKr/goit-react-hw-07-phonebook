import { Layout } from './Layouy/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { FilterForm } from './FilterForm/FilterForm';
import { ContactList } from './ContactList/ContactList';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Layout>
        <AppBar />
        <ContactForm />
        <FilterForm />
        <ContactList />
      </Layout>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        transition={Zoom}
        draggable
        Transition="zoom"
      />
    </>
  );
};
