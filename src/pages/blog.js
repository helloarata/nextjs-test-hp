import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Layout from '../../components/Layout'
import { client } from '@/libs/client'

const Blog = ({blog}) => {
  return (
    <Layout title='Blog'>
      <h1> Blog Page</h1>
      <div>
        <ul>
          {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
export default Blog

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog"});

  return {
    props: {
      blog: data.contents,
    },
  };
}
