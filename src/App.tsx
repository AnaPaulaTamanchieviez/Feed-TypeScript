import { Post, PostType } from './components/Post'; 
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts:PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AnaPaulaTamanchieviez.png',
      name: 'Ana Paula Tamanchieviez',
      role: 'Technical Support Engineer'
    },
    content: [
      {type: 'paragraph', content: 'Hey folks! 👋'},
      {type: 'paragraph', content: "[EN] Here's just an idea of a post. To learn more about my project and its features, feel free to leave your feedback, remove comments, or give likes to comments. Enjoy!  🚀"},
      {type: 'link', content: "👉{' '}jane.design/doctorcare"},
    ],
    publishedAt: new Date('2024-05-11 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/AnaPaulaTamanchieviez.png',
      name: 'Ana Paula Tamanchieviez',
      role: 'Web Developer Student'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: '[PT] Aqui está apenas uma ideia de postagem. Para saber mais sobre meu projeto e seus recursos, fique à vontade para deixar seu feedback, remover comentários ou curtir comentários. Aproveite! 🚀'},
      {type: 'link', content: "👉{' '}jane.design/doctorcare"},
    ],
    publishedAt: new Date('2024-05-10 20:00:00'),
  },
];

export function App() {

  return (
    <div> 

      <Header />
     
      <div className={styles.wrapper}>
        <Sidebar /> 
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          } )}
        </main>
      </div>
    </div>
    
  )
}

