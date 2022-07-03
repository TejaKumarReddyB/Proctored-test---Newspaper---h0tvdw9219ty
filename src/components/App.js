import React, {Component, useState} from "react";
import axios from 'axios';
import '../styles/App.css';

const App = () => {
  
  const [news, setNews] = useState([]);
  
  const fetchNews = () => {
    axios.get("https://gnews.io/")
    .then((response) => {
      console.log(response);
      setNews(response.data.articles)
    })
  }
  return (
    <>
    <div className="container my-3">
       <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" data-testid='lang-en' onClick={fetchNews}>fetchNews</button>
          </div>
       </div>
    </div>

      <div className="container">
        <div className="row">
          {
          news.map((value, index) => {
            return(
              <div key={index} className="col-4">
                <div className="card" style={{width: "18rem" }}>
                  <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">{value.title}</h4>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-primary">Main</a>
                    </div>
              </div>
            </div>
          );
        })
      }
      </div>
      </div>
    </>
  )
}


export default App;
