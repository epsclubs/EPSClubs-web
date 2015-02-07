config = require('./config')
express = require('express')
exphbs = require('express-handlebars')
routes = require('./routes')
path = require('path')
bodyParser = require('body-parser')
cookieParser = require('cookie-parser')
expressSession = require('express-session')

passport = require('passport')
passportLocal = require('passport-local')

restify = require('restify')
port = process.env.port || 3000
morgan = require('morgan')

app = express()
app.use morgan 'dev'

client = restify.createJsonClient(url:config.options.api_url,version:'0.2.0')

hbs = exphbs.create(
  defaultLayout: 'main'

  helpers:
    isCurrent: (href, currentUrl)->
      if href == currentUrl then 'active' else null

  partialsDir: [
    'views/partials/'
  ]
)

app.use bodyParser.urlencoded(extended: false)
app.use cookieParser()
app.use expressSession(
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
)

app.use passport.initialize()
app.use passport.session()

passport.use new passportLocal.Strategy((username, password, done) ->
    # done(null, user)
    # done null, null
    # done new Error('passss')

    query = '/users'+
            '?q={"_id":"'+username+'","password":"'+password+'"}'+
            '&select=email%20firstName%20lastName%20studentNumber'+
            '%20classOf%20volunteerHrs%20messages%20shifts%20clubs'
    client.get query, (_err, _req, _res, _obj) ->
      done(_err) if _err

      if typeof _obj[0] != 'undefined'
        done(null, _obj[0])
      else
        done(null, null)
)

passport.serializeUser((user,done) ->
  done(null, user._id)
)

passport.deserializeUser((username, done) ->
  query = '/users'+
          '?q={"_id":"'+username+'"}'+
          '&select=email%20firstName%20lastName%20studentNumber'+
          '%20classOf%20volunteerHrs%20messages%20shifts%20clubs'
  client.get query, (_err, _req, _res, _obj) ->
    done(_err) if _err

    if typeof _obj[0] != 'undefined'
      done(null, _obj[0])
    else
      done(null, null)
)

app.engine 'handlebars', hbs.engine
app.set 'view engine', 'handlebars'
app.use express.static(path.join(__dirname, 'public'))
app.use cookieParser()
# if 'development' == config.options.env
  # config.convertCjsx './assets'

routes(app,client,passport)

app.listen port, ->
  console.log 'running at ' + port
  return
