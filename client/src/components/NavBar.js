import React from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
    render(){
        // const { location } = props
        const { location } = this.props
        return(

            <Menu>
                <Link to='/'>
                  <Menu.Item active={location.pathname == '/'} >
                    Home
                  </Menu.Item >
                </Link>
                <Link to='/about'>
                  <Menu.Item active={location.pathname == '/about'} >
                    About    
                 </Menu.Item >
                </Link>
            </Menu>
        )

    }
}

export default withRouter(NavBar)