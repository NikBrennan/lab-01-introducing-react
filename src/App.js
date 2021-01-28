import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './component/Greeting';
import './stylesheet.css'

const App = () => {

  const [name, setName] = useState("")

  return (
    <>
      <body>
        <div className="row justify-content-lg-center">
          <div className="col-lg-4 p-4">
            <input
              name="name"
              onChange={({target: {value}}) => setName(value)}
              placeholder="Enter your name"
              className="form-control yellow-eggshell"
            />
          </div>
          <div className="col-lg-10 border border-dark rounded light-navy">
            <Greeting name={name}/>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;