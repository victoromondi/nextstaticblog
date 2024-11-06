import Link from "next/link";
import styles from "../styles/post.module.css";

const Blog = (props) => {
  return (
    <div>
      <h1>Our Blog Page</h1>
      {props.posts.map((post, index) => (
        <div key={index} className="single-post-in-archive">
          <h3>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{post.content}</p>
        </div>
      ))}
      <button className={styles.button}>Just Testing</button>
    </div>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://learnwebcode.github.io/json-example/posts.json"
  );
  const data = await response.json();
  return {
    props: {
      posts: data.posts,
    },
  };
};
