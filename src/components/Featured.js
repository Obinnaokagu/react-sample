import React from "react";
import propTypes from "prop-types";

const Featured = ({ featured }) => (
    <span>

        {featured ? (
                <a className="ui right yellow corner label">
                <i className="star icon" />
                </a>
            ): (
                <a className="ui right corner label">
                <i className="empty star icon" />
                </a>
            )}
    </span> 
    
);

Featured.propTypes = {
    featured: propTypes.bool.isRequired
}


export default Featured;