import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=50" />
          <div className={styles.authorInfo}>
            <strong>Brian Baker</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="24 de agosto às 18:08h" dateTime="2023-08-24 18:08:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>consectetur adipisicing elit</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae velit mollitia laborum culpa unde facilis dolorum sequi temporibus quasi iusto totam reprehenderit itaque perspiciatis eveniet asperiores, libero, accusantium fuga!</p>

        <p><a href="http://">itaque perspiciatis</a></p>
      </div>
    </article>
  )
}