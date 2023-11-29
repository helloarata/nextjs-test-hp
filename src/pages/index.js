import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../../components/Layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="Home">
      <section>
        <h2>共に壮大な物語をつくりましょう。</h2>
        <p>Let's create an epic story together.</p>
      </section>
      <section>
        <h2>Concept</h2>
        <p>本公演のキャストは「4つのFonts」です。一つのフォントを一人の「役者」と捉え、役を演じるとはどういう事なのか?Fontsから織りなす役割を感じ
          役者たちが発する言葉に込められた想いをご自身の想像で物語を創造してみてください。
          かつて石に彫られたり、木に筆で書かれていた文字は、やがて木版や金属活字で印刷されるようになり、写真植字を経て、現代ではDTPシステムによるデジタルフォントが数多く使われるようになりました。人はずっと昔から、言葉を話し、文字を使う。自分が得た知識や考え方を他人に伝えてきました。とくに文字は、時間や場所を越える情報の伝達手段として発展してきたのです。さまざまな影響を受けながら、文字はそのカタチを変えてきたのです。
        </p>
      </section>
      <section>
        <h2>Story</h2>
        <p>かつて石に彫られたり、木に筆で書かれていた文字は、やがて木版や金属活字で印刷されるようになり、写真植字を経て、現代ではDTPシステムによるデジタルフォントが数多く使われるようになりました。人はずっと昔から、言葉を話し、文字を使う。自分が得た知識や考え方を他人に伝えてきました。とくに文字は、時間や場所を越える情報の伝達手段として発展してきたのです。さまざまな影響を受けながら、文字はそのカタチを変えてきたのです。</p>
      </section>
      <section>
        <h2>Learn about the company</h2>
      </section>
      <section>
        <h2>Cast</h2>
        <div>
          <div>ゆうしゃ</div>
          <div>せんし</div>
          <div>そうりょ</div>
          <div>まほうつかい</div>
          <div>なかまになる</div>
        </div>
      </section>
    </Layout>
  )
}
