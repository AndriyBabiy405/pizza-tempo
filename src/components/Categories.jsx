import React from 'react'
import PropTypes from "prop-types";


const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

    return (
        <div className="categories">
              <ul>
                <li onClick={() => onClickCategory(null)} className={activeCategory === null ? "active" : ""}>Все</li>
                {items.map((name, index) => <li 
                onClick={() => onClickCategory(index)} 
                className={activeCategory == index ? "active" : ""} 
                key={`${name}_${index}`}>
                {name}
                </li>)}
              </ul>
            </div>
    )
}
) 

Categories.propTypes = {
 activeCategory: PropTypes.number.isRequired,
 items: PropTypes.arrayOf(PropTypes.object),
 onClickCategory: PropTypes.func
};

Categories.defaultProps = {
  activeCategory: null, 
  items: [], 
}

export default Categories;