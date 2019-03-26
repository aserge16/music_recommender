import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
	<div>
    <head>
        <title>Music Recommendation using Spotify API</title>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </head>
    
    <body>
    <div class="container-fluid"> 

        <div class="jumbotron">
            <h1>Music Recommendation using Spotify API</h1>
        </div>
        

        <div class='row' style="height: 400px; background-color: lightpink;">
            <div class="col-md-8 pr-md-1" style="height: 100%">
                <form method='get' action=''>
                    <div class='tb'>
                        <div class='td'><input type='text' placeholder='Search' required/></div>
                        <div class='td' id='s-cover'>
                            <button type='submit'>
                                <div id="s-circle"></div>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-4 pl-md-2" style="background-color: aquamarine">Checkbox</div>
        </div>
        

        <div class="row" style="height: 400px; background-color: aqua;">Songs</div>
        

        <div class="row" style="height: 400px; background-color: lightcoral;">Artists</div>


        <div class="row" style="height: 400px; background-color: lemonchiffon;">Genre</div>
        
    </div>
    </body>
	</div>
	/*       
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
    );
  }
}

export default App;
