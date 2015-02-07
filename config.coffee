exports.options =
  env: 'development'
  api_url: 'http://benzhang.xyz:8081'

exports.convertCjsx = (dir, callback) ->
  console.log 'Environment: Development'
  transform = require 'coffee-react-transform'
  fs = require('fs')

  fs.readdir dir, (err, list) ->
    for file in list
      if (file.substr file.lastIndexOf '.') == '.cjsx'
        fs.readFile dir + '/' + file,encoding : 'utf-8', (err, data) ->
          fs.writeFile dir + '/'+file.substr(0, file.lastIndexOf('.'))+'.coffee', transform(data), (err) ->
            console.log '[Converted]: '+ dir+'/'+file.substr(0, file.lastIndexOf('.'))+'.coffee'
            callback() if typeof callback != "undefined"
            return
