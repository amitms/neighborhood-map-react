import React, { Component } from 'react'

class NavSearch extends Component {

    showList() {
        let listFilter = document.getElementsByTagName('aside');
        listFilter[0].classList.add('open')
    }

    render() {
        const { handleQuery } = this.props;
        return (
            <nav className="navbar">
                <div className="navbar-header">
                    <h1 tabIndex="0" className="site-name">My Neighborhood Tips</h1>
                    <div className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                id="search-input" 
                                type="text"  
                                placeholder="Filter" 
                                onChange={(event) => handleQuery(event.target.value)}
                                onFocus={() => this.showList()}
                                />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavSearch;