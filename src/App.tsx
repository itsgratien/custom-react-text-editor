import React from 'react';
import './App.scss';
import { CustomEditor } from 'component/CustomEditor';

const App = () => {
  return (
    <div className='App relative m-auto rounded-2xl mt-20'>
      <CustomEditor />
    </div>
  );
};

export default App;
