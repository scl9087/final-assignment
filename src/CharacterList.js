import React from '../node_modules/react';

class CharacterList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: []
    };
  }
  
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results
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
    const { error, isLoaded, results } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className="residents">
          {results.map(character => (
            <li key={character.id} className="character-item">
              <div className="profile-img">
                  <img src={character.image} alt={character.name} />
              </div>
              <div className="content">
                  <h2>{character.name}</h2>
                  <h3>status: {character.status}</h3>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default CharacterList;