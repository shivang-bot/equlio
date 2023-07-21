import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js'
import { PropTypes } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(60)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `EQULIO - ${capitalize(props.category)}`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    


    return (
        <>
            <h1 className='text-center' style={{ marginTop: '80px' }}>Top {capitalize(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} auther={element.author} time={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defualtProps = {
    country: 'in',
    pageSize: 6,
    category: "general",
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News