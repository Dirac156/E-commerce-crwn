import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import { withRouter } from "react-router-dom";

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items, history, routeName}) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push("/shop/" + routeName)}>{title.toUpperCase()}</h1>
        <div className='preview-item'>
            {items
                .filter((item, idx) => idx < 4)
                .map(( item ) => (
                <CollectionItem key={item.id} item = { item } />
            ))}
        </div>
    </div>
)

export default withRouter(CollectionPreview);