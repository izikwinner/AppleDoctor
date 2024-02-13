import { PostType } from "@/interface";
import axios from "axios";
import Link from "next/link";
import styles from './blog.module.css'; // Подключаем ваши стили

async function getData(id) {
  const { data } = await axios.get(`http://localhost:8000/api/news?id=${id}`); 
  return data;
}

const Blog = async ({params} : {params : {id: string}}) => {
  const data: PostType[] = await getData(params.id);

  return (
        <div key={data.id}>
          <div className={styles.blogTitle}>
            <h2>
              <Link className={styles.links} href={`/blog/${data.id}`}>{data.title}</Link>
            </h2>
          </div>
          <div>
              <img className={styles.img} src={`/images/${data.image}`} alt="image" />
            </div>
          <div className={styles.blogContent}>
            <p className={styles.text} >{data.content}</p>
          </div>
        </div>
  );
};

export default Blog;
