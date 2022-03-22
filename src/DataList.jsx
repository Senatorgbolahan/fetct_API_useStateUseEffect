import React from 'react';
import './style.css';

export default function DataList({ data }) {
  return (
    <div>
      <h1>I am OmOgbolahan</h1>
      <div className="App container py-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Job Title</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.job_title}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
