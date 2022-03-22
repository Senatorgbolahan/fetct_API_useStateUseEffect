import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import DataList from './DataList';

export default function App() {
  const [data, setdata] = useState('');
  useEffect(() => {
    fetch('https://therichpost.com/testjsonapi/users/')
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <DataList data={data} />
    </div>
  );
}
