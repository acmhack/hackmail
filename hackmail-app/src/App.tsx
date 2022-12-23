import React, {useState} from 'react';
import './App.css';
import { logo } from './images/Images';
import { Button, DatePicker, Form, Space, version } from "antd";
//import EmailField from './components/common/EmailField';
import EmailFormInit from './components/section/EmailFormInit'
import { RcFile } from 'antd/lib/upload';

const App = () => {

  return ( //add option to submit other files (so check the data:application/pdf:base64 in the base64Data)
    <div className="App">   
        {/*<input type="file" accept="application/pdf" onChange={onChange}/>*/}
      <EmailFormInit />
    </div>
  );
}

export default App;
