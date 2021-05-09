import { Component } from 'react';
import Loader from "react-loader-spinner";
import styles from './Loader.module.css';

export default class App extends Component {
  
  render() {
    return (
        <div className={styles.Loader}>
            <Loader
                type="Hearts"
                color="red"
                height={200}
                width={150}
            />
       </div>
    );
  }
}