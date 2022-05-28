import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'router';
import AuthContextProvider from 'context/AuthContextProvider';

const App: FC = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
