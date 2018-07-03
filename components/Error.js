const Error = ({ message }) => (
  <div>
    <h1>ERROR</h1>
    <p>{message}</p>
    <style jsx>{`
      div {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Error
