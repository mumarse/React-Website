import React from 'react';

const Card = (props) => {
    return (
      <>
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc" />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold"> { props.title } </h5>
                  <p className="card-text">The button provides you the best {props.title} Services.</p>
                  <a href={props.links} rel="noreferrer" target="_blank">
                  <button className="btn btn-primary">Check it out</button>
                  </a>
                </div>
          </div>
        </div>
        </>
    );
  };

export default Card;