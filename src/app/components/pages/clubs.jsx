var React = require('react'),
    mui = require('mui'),
    ClubThumbnail = require('./clubs/club-thumbnail.jsx');

var Clubs = React.createClass({

  getInitialState: function(){
    var des="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";
    var clubArr = [
      {heading: "Cancer Society", route:"get-started", img:"images/get-started.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Computer Club", route:"css-framework", img:"images/css-framework.svg", description : des},
      {heading: "Student Council", route:"components", img:"images/components.svg", description : des}
    ];
    return {clubs: clubArr};
  },

  render: function() {



    return (
      <div className="clubs-page mui-app-content-canvas">
        <div className="full-width-section">

          <h1 className="mui-font-style-display-1">Clubs</h1>
          <p>Stuffs</p>

          <div className="club-listings">

            <div className="feature-container full-width-section-content">
              {this._populateClubs()}
            </div>

          </div>

        </div>
      </div>
    );
  },

  _populateClubs: function() {
    var clubs = [];

    for (var i = 0; i < this.state.clubs.length; i++) {
      clubs.push(<ClubThumbnail {...this.state.clubs[i]} />);
    }

    return clubs;
  }

});

module.exports = Clubs;