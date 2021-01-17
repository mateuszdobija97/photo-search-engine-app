import React from 'react'

import SearchBar from '../../components/SearchBar/SearchBar'

const SearchEngine: React.FC = () => {
    return (
        <div className="search-engine">
            <h1 className="search-engine__header">Unsplash</h1>
            <p className="search-engine__description">The internet's source of <span className="search-engine__span">freely-usable images</span>. Powered by creators everywhere.</p>
            <SearchBar additionalClass={'search-engine__form'} />
        </div>
    )
}

export default SearchEngine;