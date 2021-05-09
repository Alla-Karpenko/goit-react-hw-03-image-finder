import React from 'react';
import styles from './Button.module.css';

const Button = ({ hits }) => {
    return (
        <div>
            <button className={styles.Button} type="button" onClick={hits}>Load more</button>
        </div>
    );   
}

export default Button;



