import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 9;
  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 10
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          // onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country='in' category='general' />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key='business' pageSize={this.pageSize} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key='general' pageSize={this.pageSize} country='in' category='general' />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key='health' pageSize={this.pageSize} country='in' category='health' />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key='science' pageSize={this.pageSize} country='in' category='science' />} />
            <Route exact path="/sport" element={<News setProgress={this.setProgress} apikey={this.apikey} key='sport' pageSize={this.pageSize} country='in' category='sport' />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key='technology' pageSize={this.pageSize} country='in' category='technology' />} />

          </Routes>
        </Router>
      </div>
    )
  }
}
