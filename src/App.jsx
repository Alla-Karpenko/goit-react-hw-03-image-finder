import { Component } from 'react';
import React from 'react'; 

import Loader from './components/Loader'
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Modal from './components/Modal';
import  imagesApi  from './imagesApi/imagesApi';

import styles from './App.module.css'


class App extends Component {
   
    state = {
        hits: [],
        currentPage: 1,
        isLoading: false,
        searchQuery: '',
        largeImage: '',
        showModal: false,
    };
  
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal
        }) )
    }

    componentDidUpdate(prevProps, prevState) {
        
        if(prevState.searchQuery !== this.state.searchQuery) {
            this.fetchHits();
        }
        if (this.state.currentPage !== 2 && prevState.currentPage !== this.state.currentPage) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
        }
    }
 
    onChangeQuery = query => {
        if ( !query ) {
            alert('Заполните форму поиска');
        }
        this.setState({ searchQuery: query, currentPage: 1, hits: [] });
    }
    
    fetchHits = () => {
        const { currentPage, searchQuery } = this.state;
        
        const options = { searchQuery, currentPage };

        this.setState({ isLoading: true });

        imagesApi.fetchHits(options).then(hits => 
            { this.setState( prevState => ({
            hits: [...prevState.hits, ...hits],
            currentPage: prevState.currentPage + 1,
        })) 
        })
        .catch((error) => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    };

    setLargeImage = imgUrl => {
        this.setState({ showModal: true, largeImage: imgUrl  });
    };

  

    render() {
        const { hits, isLoading, showModal,  largeImage } = this.state;

        return (
            <div className={styles.App}>
                
                <Searchbar  onSubmit={this.onChangeQuery} />
                <ImageGallery hits={hits} openImage={this.setLargeImage} />

                {isLoading && <Loader />}

                {hits.length > 0 && !isLoading && (
                    <Button    hits={this.fetchHits} />
                )}

               {showModal &&  <Modal  onClose={this.toggleModal}   img={largeImage}/>} 
            </div>
        );
    }
}

export default App;


