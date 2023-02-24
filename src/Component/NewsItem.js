import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, auther, time, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left: '80%', zIndex: '1'}}>
                        {source}
                    </span>
                    <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2023/02/20/550x309/WhatsApp_Image_2021-09-18_at_094218_1676852219810_1676852219960_1676852219960.jpeg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By: {!auther ? "Unknown" : auther} on {new Date(time).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
