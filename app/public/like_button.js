'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Team Cone!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      "Dessert Menu"
    );
  }
}

// ... the starter code you pasted ...

// const domContainer = document.querySelector('#like_button_container');
const domContainer = document.querySelector('#teamCone');
ReactDOM.render(e(LikeButton), domContainer);