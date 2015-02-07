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
      "className": "col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4"
    }, React.createElement("div", {
      "className": "login-panel panel panel-default"
    }, React.createElement("div", {
      "className": "panel-heading"
    }, "Log in"), React.createElement("div", {
      "className": "panel-body"
    }, React.createElement("form", {
      "role": "form",
      "onSubmit": this.handleSubmit,
      "ref": "loginForm"
    }, this.state.message, React.createElement("fieldset", null, React.createElement("div", {
      "className": "form-group"
    }, React.createElement("input", {
      "className": "form-control",
      "placeholder": "Email/Username",
      "name": "username",
      "type": "text",
      "ref": "username",
      "autofocus": "",
      "autoCorrect": "off",
      "autoCapitalize": "off"
    })), React.createElement("div", {
      "className": "form-group"
    }, React.createElement("input", {
      "className": "form-control",
      "placeholder": "Password",
      "name": "password",
      "type": "password",
      "ref": "password"
    })), React.createElement("div", {
      "className": "checkbox"
    }, React.createElement("label", null, React.createElement("input", {
      "name": "remember",
      "type": "checkbox",
      "value": "Remember Me"
    }), "Remember Me for 10 Days")), React.createElement("input", {
      "className": "btn btn-primary",
      "type": "submit",
      "value": "Login",
      "disabled": this.state.login_disabled
    }))))));
  }
});

module.exports = LoginPage;

if (typeof window !== 'undefined') {
  container = document.getElementById('LoginPage');
  React.render(LoginPage(), container);
}
