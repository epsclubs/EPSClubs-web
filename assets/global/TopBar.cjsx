# React = require('react')
#
# NavBarUserMenu = React.createClass(
#   render: ->
#
#     if @props.showUserMenu
#       dropdown = <ul className="dropdown-menu" role="menu">
#                     <li><a href="#"><span className="glyphicon glyphicon-user"></span> Profile</a></li>
#                     <li><a href="#"><span className="glyphicon glyphicon-cog"></span> Settings</a></li>
#                     <li><a href="/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
#                   </ul>
#     else
#       dropdown = <ul className="dropdown-menu" role="menu">
#                 <li><a href="/login"><span className="glyphicon glyphicon-log-out"></span> Login</a></li>
#               </ul>
#
#     <ul className="user-menu">
#       <li className="dropdown pull-right">
#         <a href="#" className="dropdown-toggle" data-toggle="dropdown">
#           <span className="glyphicon glyphicon-user"></span>
#             <span> Hello, {@props.fullName} </span>
#           <span className="caret"></span>
#         </a>
#         <ul className="dropdown-menu" role="menu">
#           <li><a href="/login"><span className="glyphicon glyphicon-log-out"></span> Login</a></li>
#         </ul>
#       </li>
#     </ul>
# )
#
#
#
#
# TopBar = React.createClass(
#
#   getInitialState: ->
#     fullName: if (@props.user) then (@props.user.firstName + ' ' + @props.user.lastName) else ('Guest')
#
#   safeStringify: (obj) ->
#     JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace /<!--/g, '<\\!--'
#
#   render: ->
#     propStoreID = 'topBarProps'
#     json = @safeStringify @props
#     propStore = (<script type="application/json" id={propStoreID}
#       dangerouslySetInnerHTML={{__html: json}}>
#     </script>)
#
#     <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
#       <div className="container-fluid">
#         <div className="navbar-header">
#           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
#             <span className="sr-only">Toggle navigation</span>
#             <span className="icon-bar"></span>
#             <span className="icon-bar"></span>
#             <span className="icon-bar"></span>
#           </button>
#           <a className="navbar-brand" href="#"><span className="colored">EPS</span>Clubs</a>
#           <NavBarUserMenu fullName={@state.fullName} showUserMenu={(@props.user)?true:false}/>
#         </div>
#       </div>
#       {propStore}
#     </nav>
# )
#
# module.exports = TopBar
#
# if typeof window != 'undefined'
#   container = document.getElementById('topBar')
#   props = JSON.parse(document.getElementById('topBarProps').innerHTML)
#   React.render TopBar(props), container
