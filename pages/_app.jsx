import Link from "next/link";
import "../styles/global.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="page-container">
      <nav className="header-nav">
        <h1>
          <Link href="/">VOSite</Link>
        </h1>
        <ul>
          <li>
            <Link className={router.pathname == "/" && "active"} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/about" && "active"}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/blog" && "active"}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/mygithub" && "active"}
              href="/mygithub"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/dynamic" && "active"}
              href="/dynamic"
            >
              Dynamic
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <h3>Footer</h3>
    </div>
  );
}
