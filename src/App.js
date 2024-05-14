import React from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader.jsx';
import styles from './styles/modules/app.module.scss';
import Button from './components/Button';
import { toast } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
        </div>
      </div>
      {/* temp test */}
      <Button onClick={() => { toast.success('Please enter a title'); }}>
        Show Toast
      </Button>
      <Button variant='secondary' onClick={() => { toast.error('Please enter a title'); }}>
        Show Toast
      </Button>
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
