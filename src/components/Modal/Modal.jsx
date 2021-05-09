import React, {Component} from 'react';
import styles from './Modal.module.css'

class Modal extends Component {
  
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown );
    };
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown );
    };

    handleKeyDown = (e) => {
        if (e.code === "Escape") {
          this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };
  
   render() {
    return (
        <div className={styles.Overlay} onClick={this.handleBackdropClick}>
            <div className={styles.Modal}>
                <img src={this.props.img} alt=""/>
            </div>
        </div>
        
    );
   }
};

export default Modal;