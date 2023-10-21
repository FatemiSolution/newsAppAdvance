import React from 'react'

function NewsItem(props) {
    // getting the props
  let { title, description, imageUrl, newsUrl } =
  props;
  return (
    // format for the card froom bootstrap
    <div className="card" style={{width: '18rem'}}>
    <img src={imageUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={newsUrl} className="btn btn-primary">Read More</a>
    </div>
  </div>
  );
}

export default NewsItem