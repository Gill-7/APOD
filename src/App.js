import React, { Component } from "react";
import Data from "./components/Data";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchDate: "",
      data: [],
    };
  }

  fetchData() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=hnOlXuS4MB2nB1fMnzK5JT2TPgRRa7Ucb0cOMzCC&date=${this.state.searchDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchDate !== this.state.searchDate) {
      this.fetchData();
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchDate: event.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>Astronomy picture of the day</h1>
        <Search data={this.state.data} searchChange={this.onSearchChange} />
        <p className="date">{this.state.data.date}</p>
        {this.state.data.length === 0 ? (
          <p className="loading">Loading...</p>
        ) : (
          <Data data={this.state.data} />
        )}
      </>
    );
  }
}

export default App;
