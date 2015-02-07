React = require 'react'

LoginPage = React.createClass(
  getInitialState: ->
    { login_disabled: true }
  componentDidMount: ->
    @setState
      login_disabled: false
      message: ''
    return
  handleSubmit: (e) ->
    e.preventDefault()
    # disable login button to avoid multiple clicks
    @setState login_disabled: true
    username = @refs.username.getDOMNode().value.trim()
    password = @refs.password.getDOMNode().value.trim()
    @authenticate username, password, ((data) ->
      if data.success
        @refs.loginForm.getDOMNode().reset()
        @displayMessage 'success', 'Successfully logged in.'
        console.log 'redirecting'
        window.location.href = '/me/dashboard'
      else
        @displayMessage 'warning', 'Authentication Failed. Do you have CAPS enabled?'
        @setState login_disabled: false
      return
    ).bind(this)
    return
  authenticate: (username, password, callback) ->
    $.ajax(
      type: 'POST'
      url: '/login'
      data:
        username:username
        password:password
      success: (data) ->
        callback data
      error: (jqXHR, textStatus, errorThrown) ->
        callback (success: false)
      dataType: 'json'
    )
  displayMessage: (type, message) ->
    # type: success warning error
    alertStr = 'alert alert-' + type
    iconStr = 'glyphicon glyphicon-' + (if type == 'success' then 'check' else 'exclamation-sign')
    @setState message: <div className={alertStr} role="alert">
                  <span className={iconStr} aria-hidden="true"></span>
                  <span className="sr-only">Message:</span>
                  &nbsp;{message}
                </div>
    return
  render: ->
    # <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    #   <div className="login-panel panel panel-default">
    #     <div className="panel-heading">Log in</div>
    #     <div className="panel-body">
    #       <form role="form" onSubmit={this.handleSubmit} ref="loginForm">
    #         {this.state.message}
    #         <fieldset>
    #           <div className="form-group">
    #             <input className="form-control" placeholder="Email/Username" name="username" type="text" ref="username" autofocus="" autoCorrect="off" autoCapitalize="off"/>
    #           </div>
    #           <div className="form-group">
    #             <input className="form-control" placeholder="Password" name="password" type="password" ref="password" />
    #           </div>
    #           <div className="checkbox">
    #             <label>
    #               <input name="remember" type="checkbox" value="Remember Me" />Remember Me for 10 Days
    #             </label>
    #           </div>
    #           <input className="btn btn-primary" type="submit" value="Login" disabled={this.state.login_disabled}/>
    #         </fieldset>
    #       </form>
    #     </div>
    #   </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <form className="form-signin" role="form" onSubmit={this.handleSubmit} ref="loginForm">
              <h2 className="form-signin-heading">Please sign in</h2>
              {this.state.message}
              <label for="inputEmail" className="sr-only">Email address</label>
              <input ref="username" type="text" id="inputEmail" className="form-control" placeholder="Email/Username" required autofocus="" autoCorrect="off" autoCapitalize="off"/>
              <label for="inputPassword" className="sr-only">Password</label>
              <input ref="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={this.state.login_disabled}>Sign in</button>
            </form>
          </div>
        </div>
      </div>
    # </div>
)

module.exports = LoginPage;

if typeof window != 'undefined'
  container = document.getElementById('LoginPage')
  React.render <LoginPage />, container
