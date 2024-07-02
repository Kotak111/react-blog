import React from 'react';

function SingleUi({src,name,dec,date}) {
    return (
        <div>

          <div className="row">
            <div className="col-6">
            <img src={src??"no data"} className="card-img-top img-fluid" alt="..."/>
            </div>
            <div className="col-6">
            <div class="card">
        
  <div class="card-body">
    <h5 class="card-title">{name??"nodata"}</h5>
    <p class="card-text">{dec}</p>
    <p class="card-text">{date}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
            </div>
          </div>
          
        </div>
    );
}

export default SingleUi;