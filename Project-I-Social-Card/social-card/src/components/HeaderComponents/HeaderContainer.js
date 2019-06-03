import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer(){
    return (
        <header>
        <ImageThumbnail />
        <div>
        <HeaderTitle />
        <HeaderContent />
        </div>
        </header>
    )
};

export default HeaderContainer;