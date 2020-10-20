import React from 'react';
import Create from '../components/Create'
import Search from '../components/Search'


class Sidebar extends React.Component {

    render() {
        return (
            <div className='master-detail-element sidebar'>
                {/* <Search /> */}
                <Create />
            </div>

        )

    }

}

export default Sidebar;