import { client } from '@/libs/client'

export default function BlogId({ blog }) {
  console.log(blog);
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div dangerouslySetInnerHTML={{
        __html: `${blog.content}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({endpoint: "blog"});
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false};
};

// データーをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id});
  console.log('getStaticProps is running');
  return {
    props: {
      blog: data,
    },
  };
};