import Link from 'next/link'

const Article = ({ title, content, normalizedUrl, children }) => (
  <article className="readarticle">
    <h1>
      <Link href={normalizedUrl}>
        <a>{title}</a>
      </Link>
    </h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    {children}
    <style jsx global>{`
      .readarticle {
        font-size: 1em;
        margin: 20px auto;
        margin-bottom: 10vh;
        max-width: 650px;
        padding: 0 10px;
        line-height: 1.7em;
        font-weight: 100;
        color: #000;
        box-sizing: border-box;
      }
      .readarticle * {
        box-sizing: border-box;
      }
      @media screen and (min-width: 600px) {
        .readarticle {
          font-size: 1.25em;
        }
      }
      .readarticle h1,
      .readarticle h2,
      .readarticle h3 {
        line-height: 1.2;
      }
      .readarticle img {
        max-width: 100%;
        height: auto;
      }
      .readarticle video,
      .readarticle pre,
      .readarticle code,
      .readarticle figure {
        margin: 0;
        margin-bottom: 1.5em;
        width: 100%;
        height: auto;
        overflow-x: scroll;
      }

      .readarticle iframe {
        max-width: 100%;
      }

      .readarticle figure {
        text-align: center;
      }

      .readarticle pre {
        background-color: #f3f3f3;
        padding: 1em;
        font-size: 0.8em;
      }

      .readarticle blockquote {
        padding: 16px;
        margin: 0;
        background-color: #f7f7f7;
        font-size: 0.95em;
        line-height: 1.6em;
      }

      .readarticle pre {
        line-height: 1.5em;
      }

      .readarticle code {
        background-color: #f3f3f3;
        padding-left: 0.3em;
        padding-right: 0.3em;
        font-size: 0.8em;
      }

      .readarticle p {
        margin-bottom: 1.5em;
      }

      .readarticle a {
        text-decoration: none;
        color: #01317d;
        font-weight: 500;
      }
      .readarticle a:visited {
        color: #6685b5;
      }
    `}</style>
  </article>
)

export default Article
