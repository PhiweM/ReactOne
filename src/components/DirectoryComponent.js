import React, { Component } from "react"; //importing react with a named import called component
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import CampsiteInfoComponent from "./CampsiteInfoComponent";

class Directory extends Component {                                                                     //js class inheritance extends from React cl
 
  render() {
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
           <Card onClick={() => this.props.onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {directory}
        </div>
      </div>
    );
  }
}

export default Directory;