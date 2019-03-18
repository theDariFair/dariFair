'use strict';

const e = React.createElement;

class LikeButtonTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Team Coney!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      "Food Menu"
    );
  }
}

// ... the starter code you pasted ...

// const domContainer = document.querySelector('#like_button_container');
const domContainer = document.querySelector('#teamConey');
ReactDOM.render(e(LikeButtonTwo), domContainer);