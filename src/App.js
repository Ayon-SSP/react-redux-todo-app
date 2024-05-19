import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader.jsx';
import AppContent from './components/AppContent.jsx';
import styles from './styles/modules/app.module.scss';
import CheckButton from './components/CheckButton.jsx';

function App() {

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    // dispatch(
    //   updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' })
    // );
  };

  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <CheckButton checked={checked} handleCheck={handleCheck} />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
