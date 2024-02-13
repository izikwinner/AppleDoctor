import { PostType } from '@/interface';
import axios from 'axios';
import Link from 'next/link';
import styles from './blog.module.css'; // Подключаем стили

async function getData() {
  const { data } = await axios.get('http://localhost:8000/api/news');
  return data;
}

const Blog = () => {

  // Устанавливаем лимит на отображение символов контента
  const contentLimit = 600;

  const truncateContent = (content: string) => {
    return content.length > contentLimit ? `${content.slice(0, contentLimit)}...` : content;
  };


  return (
    <>
      {getData().then(data =>
        data.map((c: PostType) => (
          <div className={styles.body} key={c.id}>
            <div className={styles.blogTitle}>
              <h2>
                <Link className={styles.links} href={`/blog/${c.id}`}>
                  {c.title}
                </Link>
              </h2>
            </div>
            <div>
              <img className={styles.img} src={`/images/${c.image}`} alt="image" />
            </div>
            <div className={styles.blogContent}>
              <p className={styles.text}>
                {`${c.content.slice(0, contentLimit)}`}
                  {c.content.length > contentLimit && (
                <Link className={styles.links} href={`/blog/${c.id}`}>
                  ...
                </Link>
              )}
              </p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Blog;
