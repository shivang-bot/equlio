import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, auther, time, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', right: 0, position: 'absolute' }}>
                        <span className="badge rounded-pill bg-dark" >
                            {source}
                        </span>
                    </div>
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

export default NewsItem
