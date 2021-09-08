import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
    };
  }

  // it will execute cute after render has completed
  async componentDidMount() {
    // fetching news API
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=5eedf541677b4ab8b82cc1555b88e6e6";
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        {/* Top Heading */}
        <h2>NewsViews - Top Headlines</h2>
        <div className="row">
          {/* Looping through each article of aeticles array and populate the articles */}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  // slice method is use to limit the size of characters in title and description
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 90) : " "
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
