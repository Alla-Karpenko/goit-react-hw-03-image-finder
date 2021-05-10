import React, {Component} from 'react';
import styles from './Searchbar.module.css'

class  Searchbar extends Component{
  state = { searchQuery: '' };

  handelChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  }

  handelSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === ''){
      alert('Заполните форму поиска')
    } else {
    this.props.onSubmit(this.state.searchQuery)
    this.setState({ searchQuery: ''})
    }
  }
 
   render () {
    return (
      <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={this.handelSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
    
        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handelChange}
        />
      </form>
    </header>
    );
  }

}


export default  Searchbar;