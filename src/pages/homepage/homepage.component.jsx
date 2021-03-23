import React from 'react';
import './homepage.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component.jsx';
import Directory from '../../components/directory/directory.component.jsx';

const HomePage = () => (
    <div className='homepage'>
        <Directory>
            <MenuItem></MenuItem>
        </Directory>
    </div>
);

export default HomePage;