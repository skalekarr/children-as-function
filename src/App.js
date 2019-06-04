import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Query extends Component {
  state = {
    loading: true,
    error: {},
    data: {}
  }
  componentDidMount() {
    //do the apicall here
    this.setState({ loading: false, data: { header: "may the force be with you" } });
  }

  render() {
    const { state: props, props: { children } } = this;

    // return the data here
    // passing state as props here after renaming state to props
    return children(props);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Query>
          {
            ({ loading, error, data }) => {
              if (loading) return <>Loading.......</>
              if (Object.keys(error).length > 0) return <>Some Error Handler</>
              if (data) return (
                <>
                  <img src={logo} className="App-logo" alt="logo" />
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.header}
                  </a>
                </>
              )
            }
          }
        </Query>
      </header>
    </div>
  );
}

export default App;
