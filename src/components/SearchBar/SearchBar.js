import React from 'react';
import './SearchBar.css';




class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
<<<<<<< HEAD
=======
            // POSIBLE BUG CON best_match
>>>>>>> refs/remotes/origin/master
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match':'best_match',
            'Highest rated':'rating',
            'Most Reviewed':'review_count'
        };
    }

    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption) {
            return 'active';
<<<<<<< HEAD
        } else{
=======
        } else {
>>>>>>> refs/remotes/origin/master
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
<<<<<<< HEAD
            const sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
=======
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
>>>>>>> refs/remotes/origin/master
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }

}

export default SearchBar;