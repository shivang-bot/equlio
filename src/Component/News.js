import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js'
import { PropTypes } from "prop-types";

export default class News extends Component {
    static defualtProps = {
        country: 'in',
        pageSize: 6,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=291d963b7a584ccfa07a05c51f26b61d&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }


    render() {
        return (
            <div className='container my-4'>
                <h1 className='text-center'>Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} auther={element.author} time={element.publishedAt} source={element.source.name} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>

        )
    }
}
