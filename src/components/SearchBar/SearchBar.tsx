import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { SearchBarTypes } from './SearchBar.types';
import { InputEvent, SubmitEvent } from '../../utils/types';

const SearchBar: React.FC<SearchBarTypes> = ({ additionalClass }) => {
    const [search, setSearch] = useState<string>('');
    const classNameList: string = classNames(`search-bar__form ${additionalClass}`);
    const history = useHistory();

    const handleResetSearch = () => setSearch('');

    const handleOnChangeInput: InputEvent = e => setSearch(e.target.value);

    const handleOnSubmitForm = (e: SubmitEvent) => {
        e.preventDefault();
        history.push({pathname: `/photos/${search}`});
    }

    return (
        <div className="search-bar">
            <form className={classNameList} onSubmit={handleOnSubmitForm}>
                <i className="search-bar__i-search fas fa-search"></i>
                <input className="search-bar__input" onChange={handleOnChangeInput} placeholder="Search..." type="text" value={search}/>
                <i className="search-bar__i-reset fas fa-times" onClick={handleResetSearch} ></i>
            </form>
        </div>
    )
}

export default SearchBar;