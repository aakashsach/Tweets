import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TweetDetailComponent, TweetsComponent} from './tweets'
import reportWebVitals from './reportWebVitals';

const appEl = document.getElementById('root')
if (appEl){
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appEl
);
}
const e = React.createElement
const tweetsEl = document.getElementById('tweetme')
if (tweetsEl) {
  const MyComponent = e(TweetsComponent, tweetsEl.dataset)
  ReactDOM.render(MyComponent, tweetsEl);
}

const tweetDetailElements = document.querySelectorAll(".tweetme-detail")

tweetDetailElements.forEach(container=>{
  ReactDOM.render(e(TweetDetailComponent, container.dataset), container);
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
