import React from "react";

import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { createStructuredSelector } from "reselect";
import { selectCollectionsPreview } from "../../redux/shop/shop.selectors";

import "./collection-overview.styles.scss";


const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
    {collections.map(collection => (
        <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
    ))}
    </div> 
)

const mapStateToProps = createStructuredSelector ({
    collections : selectCollectionsPreview
})

export default connect(mapStateToProps)(CollectionOverview);
