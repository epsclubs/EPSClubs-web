var React = require('react'),
  Router = require('react-router'),
  Link = Router.Link,
  mui = require('mui'),
  Paper = mui.Paper;

var ClubThumbnail = React.createClass({

  propTypes: {
    heading: React.PropTypes.string,
    route: React.PropTypes.string,
    img: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      zDepth: 0
    };
  },

  render: function() {
    return (
      <div className="club-listing-container">
        <Paper className="club-listing" zDepth={this.state.zDepth}
          onMouseOver={this._onMouseOver} onMouseOut={this._onMouseOut}>
          <h3 className="club-listing-heading">{this.props.heading}</h3>
          <Link to={this.props.route} params={{_id: this.props._id}}><img className="club-listing-image" src={this.props.img} /></Link>
          <p className="club-listing-description">{this.props.description}</p>
        </Paper>
      </div>
    );
  },

  _onMouseOver: function() {
    this.setState({
      zDepth: 4
    });
  },

  _onMouseOut: function() {
    this.setState({
      zDepth: 0
    });
  }

});

module.exports = ClubThumbnail;
