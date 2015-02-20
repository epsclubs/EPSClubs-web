var React = require('react'),
  mui = require('mui'),
  Router = require('react-router');

var ClubHome = React.createClass({

  mixins: [Router.State],

  getInitialState: function(){
    return({loading:true, data:null});
  },

  componentWillMount: function(){
    var clubID = this.getParams()._id;
    setTimeout((function () {
      this.setState({data: "helloooooo"});
    }).bind(this),3000);
  },

  render: function() {
    return (
      <div className="clubs-page mui-app-content-canvas">
        <div className="full-width-section">

          <h1 className="mui-font-style-display-1">Clubs</h1>
          <p>Stuffs1</p>

          <div className="club-listings">

            <div className="feature-container full-width-section-content">
            {this.state.data}
            </div>

          </div>

        </div>
      </div>
    );
  }

});

module.exports = ClubHome;