import React from '../node_modules/react';
import CharacterList from './CharacterList';

class PlanetPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          results: {}
        };
      }
      
      componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/location/${this.props.id}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                location: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, location } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="container details">
              <div className="profile-img">
                <img src={`/img/${location.id}-scene.png`} alt={`${location.id}. ${location.name}`} />
              </div>
              <div className="content">
                <h1>{location.name}</h1>
                <h3>type: {location.type}</h3>
                <h3>dimension: {location.dimension}</h3>
                <hr />
                <h2>Residents of {location.name}</h2>
                <CharacterList 
                  location={location}
                  key={location.id}
                  id={location.id}
                />
                
              </div>
              
            </div>
          );
        }
      }

}

export default PlanetPage;