import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
      <>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
              author="Brian Baker"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />

            <Post 
              author="Peyton T. Clark"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </main>
        </div>
      </>
  )
}
