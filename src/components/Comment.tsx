import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment ({content, onDeleteComment}:CommentProps) {

    const [likeCount, setLikeCount] = useState (0);


    function handleDeleteComment () {
        onDeleteComment (content)
    }

    function handleLikeComment () {
        setLikeCount ((state) => {
            return state + 1
        });
       // posso fazer somente assim tambem: setLikeCount(likeCount+1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/AnaPaulaTamanchieviez.png" alt=''/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ana Paula Tamanchieviez</strong>
                            <time title='11 de maio às 18:47' dateTime='2024-05-11 18:57:45'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Delete comment'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}