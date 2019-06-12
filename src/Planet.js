import React from '../node_modules/react';
import PlanetImages from './PlanetImages';
import {BrowserRouter as Router, Route, Switch, Link} from '../node_modules/react-router-dom';

class Planet extends React.Component {

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }
    
    render() {
        const location = this.props.location;
        return(
            <li key={location.id} className="list-item">
                <Link to={`/location/${location.id}`}>
                <div className="planet-img">
                    <img src={`/img/${location.id}-planet.png`} alt={`${location.id}. ${location.name}`} 
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}/>
                </div>
                </Link>
                {
                this.state.isHovering &&
                
                <div className="flyout">
                    <h2>{location.name}</h2>
                    <h3>{location.type}</h3>
                </div>
                }
            </li>
        )
    }
}
export default Planet;
