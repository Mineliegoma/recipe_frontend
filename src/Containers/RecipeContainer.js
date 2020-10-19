import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Search from '../Components/Search'

class RecipeContainer extends React.Component {

    render() {
        return (
        <div className='container'>
            <Sidebar  />
            <Content  />
        </div>
        )
    }
}

export default RecipeContainer;