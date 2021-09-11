import React from 'react';
import { BrowserRouter, } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
import Routers from './Routers';
import 'antd/dist/antd.css';
import './App.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
