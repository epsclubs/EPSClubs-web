var LoginPage, React, container;

React = require('react');

LoginPage = React.createClass({
  getInitialState: function() {
    return {
      login_disabled: true
    };
  },
  componentDidMount: function() {
    this.setState({
      login_disabled: false,
      message: ''
    });
  },
  handleSubmit: function(e) {
    var password, username;
    e.preventDefault();
    this.setState({
      login_disabled: true
    });
    username = this.refs.username.getDOMNode().value.trim();
    password = this.refs.password.getDOMNode().value.trim();
    this.authenticate(username, password, (function(data) {
      if (data.success) {
        this.refs.loginForm.getDOMNode().reset();
        this.displayMessage('success', 'Successfully logged in.');
        console.log('redirecting');
        window.location.href = '/me/dashboard';
      } else {
        this.displayMessage('warning', 'Authentication Failed. Do you have CAPS enabled?');
        this.setState({
          login_disabled: false
        });
      }
    }).bind(this));
  },
  authenticate: function(username, password, callback) {
    return $.ajax({
      type: 'POST',
      url: '/login',
      data: {
        username: username,
        password: password
      },
      success: function(data) {
        return callback(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        return callback({
          success: false
        });
      },
      dataType: 'json'
    });
  },
  displayMessage: function(type, message) {
    var alertStr, iconStr;
    alertStr = 'alert alert-' + type;
    iconStr = 'glyphicon glyphicon-' + (type === 'success' ? 'check' : 'exclamation-sign');
    this.setState({
      message: React.createElement("div", {
        "className": alertStr,
        "role": "alert"
      }, React.createElement("span", {
        "className": iconStr,
        "aria-hidden": "true"
      }), React.createElement("span", {
        "className": "sr-only"
      }, "Message:"), "\u00a0", message)
    });
  },
  render: function() {
    return React.createElement("div", {
      "className": "container"
    }, React.createElement("div", {
      "className": "row"
    }, React.createElement("div", {
      "className": "col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3"
    }, React.createElement("form", {
      "className": "form-signin",
      "role": "form",
      "onSubmit": this.handleSubmit,
      "ref": "loginForm"
    }, React.createElement("h2", {
      "className": "form-signin-heading"
    }, "Please sign in"), this.state.message, React.createElement("label", {
      "for": "inputEmail",
      "className": "sr-only"
    }, "Email address"), React.createElement("input", {
      "ref": "username",
      "type": "text",
      "id": "inputEmail",
      "className": "form-control",
      "placeholder": "Email/Username",
      "required": true,
      "autofocus": "",
      "autoCorrect": "off",
      "autoCapitalize": "off"
    }), React.createElement("label", {
      "for": "inputPassword",
      "className": "sr-only"
    }, "Password"), React.createElement("input", {
      "ref": "password",
      "type": "password",
      "id": "inputPassword",
      "className": "form-control",
      "placeholder": "Password",
      "required": true
    }), React.createElement("div", {
      "className": "checkbox"
    }, React.createElement("label", null, React.createElement("input", {
      "type": "checkbox",
      "value": "remember-me"
    }), " Remember me")), React.createElement("button", {
      "className": "btn btn-lg btn-primary btn-block",
      "type": "submit",
      "disabled": this.state.login_disabled
    }, "Sign in")))));
  }
});

module.exports = LoginPage;

if (typeof window !== 'undefined') {
  container = document.getElementById('LoginPage');
  React.render(React.createElement(LoginPage, null), container);
}
