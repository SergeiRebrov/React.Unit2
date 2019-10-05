import React from 'react';

import './App.css';

function App() {
	return (
		<div className="App">
			<header className = "App-header">
       <div className="container">
        <div className="row">
            <div className="col col-lg-12">
                <h1>First React APP</h1>
                <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/reactos-256.png" alt="" />
                <p>my first react app</p>
                <button className="button-primary">Default</button>
						<div className="col col-lg-8">
								<table className="table1">
									<tbody>
                  <tr>
										<th>Name:</th>
                    <td><h3> Sergei</h3></td>
                  </tr>
									<tr>
									<th>Surname:</th>
                    <td><h3> Rebrov</h3></td>
                  </tr>
									<tr>
									<th>Age:</th>
                    <td><h3> 36</h3></td>
                  </tr>
									</tbody>
                </table>
								</div>
            </div>
        </div>
    </div>
  </header>
 </div>
	);
}

export default App;
