import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1525498128493-380d1990a112?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/AnaPaulaTamanchieviez.png"/>

                <strong>Ana Paula Tamanchieviez</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Edit your profile
                </a>
            </footer>
        </aside>
    );

}