import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class News extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          news: [],
          error: false,
        };
      }

      componentDidMount() {
        const url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a677140b2c3e45c2a9136976595d1941`;
    
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              news: data.articles
            })
          })
      }
    render(){

        return(
            <>
               <Carousel>
                     {this.state.news.map(n => <Carousel.Item>
                       <img src={n.urlToImage} className="news-image" />
                       <div className="middle">
                       <div className="news-text">
                         {n.title}
                       </div>
                       </div>
                     </Carousel.Item>
                        
            )}
                </Carousel>
          </>
        )
    }
}
export default News;