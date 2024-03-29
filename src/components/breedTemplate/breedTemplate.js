import React from 'react';
import {UncontrolledAlert } from 'reactstrap'

import Spinner from '../../UI/Spinner/spinner';




const BreedTemplate  = ({breeds, error, loading}) =>{
    let content = null;
    if(breeds){
       content = breeds.map(singleBreed=>(
        <div key={singleBreed.id} className="card mb-3 mt-2">
        <div className="card-header">
        {singleBreed.name} <span className="badge badge-info">Life Span: {singleBreed.life_span} yrs </span>
        </div>
        <div className="card-body">
          <p className="card-text">{singleBreed.description}</p>
          <a href={singleBreed.wikipedia_url} className="btn btn-primary"> Read More</a>
        </div>
      </div>))
    }
    if(error){
        content = <UncontrolledAlert  color="warning">{error.message}</UncontrolledAlert >
    }
    if(loading){
        content = <Spinner />
    }
return(
    <React.Fragment>
        { content }
    </React.Fragment>
    )
  
}

export default BreedTemplate