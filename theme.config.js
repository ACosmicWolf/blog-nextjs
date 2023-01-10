const YEAR = new Date().getFullYear()

export default {
  search: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Arsh Mehta.
      <a href="/feed.xml">RSS</a>
      <a href="https://acosmicwolf.me">Portfolio</a>
      <style jsx>{`
        a {
          margin-left: 1rem;
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
