export function Post(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <span>{props.team}</span>
      <p>{props.content}</p>
    </article>
  )
}