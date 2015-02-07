# React = require('react')
# _ = require('underscore')
#
#
# SideBarNavMenuItem = React.createClass(
#   render: ->
#
#     itemActive = if @props.href == @props.currentUrl then 'active' else ''
#
#     <li className={itemActive}>
#       <a href={@props.href}><span className={@props.glyphicon}></span> {@props.title}</a>
#     </li>
# )
#
# SideBarNavMenuSection = React.createClass(
#   render: ->
#
#     items = []
#     @props.menu.pages.forEach ((page) ->
#       items.push <SideBarNavMenuItem
#                       href={page.href}
#                       glyphicon={'glyphicon glyphicon-'+page.glyphicon}
#                       title={page.title}
#                       currentUrl={@props.currentUrl} />
#       return
#     ).bind(this)
#
#     <ul className="nav menu">
#       {items}
#     </ul>
# )
#
# MyAccountButtons = React.createClass(
#   render: ->
#     <ul className="nav menu">
#       <li className="text-center">
#         <div className="btn-group btn-group-justified sidebar-signup-login" role="group" aria-label="Login">
#           <a href="/signup" className="btn btn-primary">Sign Up</a>
#           <a href="/login" className="btn btn-primary">Log In</a>
#         </div>
#       </li>
#     </ul>
# )
#
# SideBarNavMenu = React.createClass(
#   render: ->
#
#     if @props.isLoggedIn
#       userMenu = <SideBarNavMenuSection menu={@props.userMenu}
#                               currentUrl={@props.currentUrl} />
#     else
#       userMenu = <MyAccountButtons />
#
#     guestMenu = <SideBarNavMenuSection menu={@props.guestMenu}
#                             currentUrl={@props.currentUrl} />
#
#     <ul className="nav menu">
#       <h4 className="header">My Account</h4>
#       <li role="presentation" className="header-divider"></li>
#       {userMenu}
#
#       <h4 className="header">EPSClubs</h4>
#       <li role="presentation" className="header-divider"></li>
#       {guestMenu}
#       {@props.logOut}
#     </ul>
# )
#
# SideBar = React.createClass(
#   getInitialState: ->
#     isLoggedIn = if @props.user then true else false
#     if isLoggedIn
#       userMenu = (_.select @props.menus, (menu) -> menu._id == 'me')[0]
#       logOut = <ul className="nav menu">
#         <li role="presentation" className="divider"></li>
#         <li><a href="/logout"><span className="glyphicon glyphicon-log-out"></span> Log Out</a></li>
#       </ul>
#     else
#       userMenu = null
#       logOut = ''
#
#     isLoggedIn: isLoggedIn,
#     currentUrl: @props.currentUrl,
#     userMenu : userMenu,
#     guestMenu: (_.select @props.menus, (menu) -> menu._id == 'guest')[0],
#     logOut: logOut
#
#   safeStringify: (obj) ->
#     JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace /<!--/g, '<\\!--'
#
#   render: ->
#     propStoreID = 'sideBarProps'
#     json = @safeStringify @props
#     propStore = (<script type="application/json" id={propStoreID}
#       dangerouslySetInnerHTML={{__html: json}}>
#     </script>)
#
#     <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
#
#       <SideBarNavMenu isLoggedIn={@state.isLoggedIn}
#                       userMenu={@state.userMenu}
#                       guestMenu={@state.guestMenu}
#                       logOut={@state.logOut}
#                       currentUrl={@state.currentUrl} />
#
#       <div className="attribution">Template by <a href="http://www.medialoot.com/item/lumino-admin-bootstrap-template/">Medialoot</a></div>
#       {propStore}
#     </div>
# )
#
# module.exports = SideBar
#
# if typeof window != 'undefined'
#   container = document.getElementById('sideBar')
#   props = JSON.parse(document.getElementById('sideBarProps').innerHTML)
#   React.render SideBar(props), container
