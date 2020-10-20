import React from 'react';
import Create from '../Components/Create'
import Search from '../Components/Search'


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