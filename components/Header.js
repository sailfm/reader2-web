import Link from 'next/link'

// const linkStyle = {
//   marginRight: 15
// }

// const Header = () => (
//   <div>
//     <Link href="/">
//       <a style={linkStyle}>Home</a>
//     </Link>
//     <Link href="/about">
//       <a style={linkStyle}>About</a>
//     </Link>
//   </div>
// )

import Router from 'next/router'

class Header extends React.Component {
  state = {
    url: ''
  }
  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit} action="/_read">
          <input
            type="text"
            name="url"
            placeholder="URL"
            value={this.state.url}
            onChange={this.handleUrlChange}
          />
          <input type="submit" value="read" />
        </form>
        <style jsx>{`
          header {
            display: flex;
            width: 100%;
            justify-content: center;
          }
          form {
            margin: 10px;
            display: flex;
            flex-wrap: wrap;
            width: 1280px;
            max-width: 100%;
          }
          input[type='text'] {
            background-color: white;
            border: 1px solid;
            flex-grow: 1;
            font-size: 16px;
            padding: 16px;
            border-right: 0px;
          }
          input[type='submit'] {
            background-color: white;
            border: 1px solid;
            width: 80px;
            font-size: 16px;
            cursor: pointer;
          }
          input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 30px white inset;
          }
        `}</style>
      </header>
    )
  }
  handleUrlChange = e => {
    e.preventDefault()
    this.setState({ url: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    Router.push(
      `/read?url=${encodeURIComponent(this.state.url)}`,
      `/read/${this.state.url}`
    )
  }
}

export default Header
