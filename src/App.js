import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    }
  }
  onChange =(e) => {
    const content = e.target.value;
    this.setState({
      content
    })
  }
  postSubmit
  render() {
    return (
      <div className="App">
        <form onSubmit={this.postSubmit}>
          <input
            type="textarea"
            name="content"
            placeholder="POST IT"
            value={this.state.content}
            onChange={this.onChange}
          />
          <input type="submit" value="POST" />
        </form>
      </div>
    );
  }
}
export default App;
