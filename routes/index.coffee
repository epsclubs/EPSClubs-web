React = require 'react'
LoginPage = require '../src/js/LoginPage'
browserify = require 'browserify-middleware'
_ = require 'underscore'

module.exports = exports = (app, client, passport) ->

  app.get '/welcome', (req, res)->
    if req.isAuthenticated() then user = req.user else user = null
    client.get '/menus', (_err, _req, _res, _obj) ->
      # topBar = React.renderToString(TopBar(user: user))
      # sideBar = React.renderToString(
      #                 SideBar(user: user, menus: _obj, currentUrl: req.url))
      userMenu = (_.select _obj, (menu) -> menu._id == 'me')[0].pages
      guestMenu = (_.select _obj, (menu) -> menu._id == 'guest')[0].pages
      res.render 'welcome', (user: user, userMenu: userMenu, guestMenu: guestMenu, currentUrl: req.url)
      return

  app.get '/login', (req, res) ->
    return res.redirect '/me/dashboard' if req.isAuthenticated()

    user = null
    client.get '/menus', (_err, _req, _res, _obj) ->
      # topBar = React.renderToString(TopBar(user: user))
      # sideBar = React.renderToString(
      #                 SideBar(user: user, menus: _obj, currentUrl: req.url))
      userMenu = (_.select _obj, (menu) -> menu._id == 'me')[0].pages
      guestMenu = (_.select _obj, (menu) -> menu._id == 'guest')[0].pages

      loginPage = React.renderToString(LoginPage())

      res.render 'login', (
        loginPage: loginPage,
        user: user,
        userMenu: userMenu,
        guestMenu: guestMenu,
        currentUrl: req.url,
        noSideBar: true)

  app.post '/login', passport.authenticate('local',(failureFlash:{success:false})), (req, res) ->
    res.json(success:true)

  app.get '/logout', (req, res) ->
    req.logout()
    res.redirect '/welcome'

  # app.get '/js/header.js', browserify './src/js/header.js'
