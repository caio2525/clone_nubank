import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './src/pages/Main';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#8B10AE'/>
      <Main/>

    </>
  );
}
