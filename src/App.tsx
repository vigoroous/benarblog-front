import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'router';
import AuthProvider from 'providers/AuthProvider';

const App: FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
