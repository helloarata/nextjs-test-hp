import Head from "next/head";
import Link from "next/link";
import styles from '@/styles/Home.module.css'
export default function Layout({children, title = "HP Next.js"}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className={styles.nav}>
          <div className={styles.nav__inner}>
            <div className={styles.nav__inner_nav}>
              <Link href="/" className={styles.nav__inner_link}>Home</Link>
              <Link href="/about-the-company" className={styles.nav__inner_link}>Company</Link>
              <Link href="/blog" className={styles.nav__inner_link}>Blog</Link>
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div>footer</div>
      </footer>
    </div>
  );
};