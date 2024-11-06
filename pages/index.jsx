import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Our Home Page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolorum
        rem laborum, repudiandae sed quisquam. Mollitia eos non debitis,
        temporibus quas sapiente nostrum impedit saepe earum minus delectus
        deleniti pariatur.
      </p>
      <Link href="/about">About Page</Link>
    </div>
  );
};

export default Home;
