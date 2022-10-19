import React, {useState} from 'react';
import './App.css';
import { logo } from './images/Images';
import { Button, DatePicker, Form, Space, version } from "antd";
//import EmailField from './components/common/EmailField';
import EmailFormInit from './components/section/EmailFormInit'
import { RcFile } from 'antd/lib/upload';

const App = () => {
  const [base64, setBase64] = useState("");

  const onChange = (e: any) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  }

  const onLoad = (fileString: any) => {
    setBase64(fileString)
  }

  const getBase64 = (file: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch("INSERT AWS GATEWAY", {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderName: "",
        senderEmail: "",
        message: "AHHHHHHHHHHHHHH",
        base64Data: base64,
        date: new Date(),
        fileName: "TEST_EMAIL"
      })
    })
  }

  return ( //add option to submit other files (so check the data:application/pdf:base64 in the base64Data)
    <div className="App">   
      <Form>
        {/*<input type="file" accept="application/pdf" onChange={onChange}/>*/}
        <EmailFormInit />
      </Form>
      {base64 ? <Button onClick={handleSubmit}>SEND TO LAMBDA</Button> : null}
      
    </div>
  );
}

export default App;
