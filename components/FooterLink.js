import React from 'react';
import styles from '../styles/Home.module.css'
class FooterLink extends React.Component {
    render() {
        return (
            <a className={styles.footext} href={this.props.url} target="_blank">{this.props.text}</a>
        )
    }
}
export default FooterLink;