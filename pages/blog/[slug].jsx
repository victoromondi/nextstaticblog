import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/post.module.css";

export default function Post(props) {
  const router = useRouter();
  return (
    <>
      <p>
        <Link href="/blog">Back to Posts</Link>
      </p>
      <h2 className={styles.title}>{props.post.title}</h2>
      <p>{props.post.content}</p>
      <button className={styles.button} onClick={() => router.push("/blog")}>
        Programmatically Go to All Posts
      </button>
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://learnwebcode.github.io/json-example/posts.json"
  );
  const data = await response.json();

  const thePaths = data.posts.map((pet) => {
    return { params: { slug: pet.slug } };
  });

  return {
    paths: thePaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    "https://learnwebcode.github.io/json-example/posts.json"
  );
  const data = await response.json();
  const thePost = data.posts.filter((post) => post.slug == context.params.slug);
  return {
    props: {
      // I have used thePost[0] because filter() returns an array
      // You could also use find() if you just want to get a single post
      post: thePost[0],
      title: thePost[0].title,
    },
  };
};
