import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import SearchBar from '../../components/SearchBar/SearchBar';

import { ParamTypes } from './SearchResults.types';

const SearchResults: React.FC = () => {
    const history = useHistory();
    const { name } = useParams<ParamTypes>();

    const handleOnClickBackToTheHomePage = () => history.push({pathname: '/'});

    return (
        <div className="search-results">
            <SearchBar additionalClass={'search-results__form'} />
            <h1>{name}</h1>
            <button className="search-results__button" onClick={handleOnClickBackToTheHomePage}>Go back to homepage</button>
        </div>
    )
}

export default SearchResults;