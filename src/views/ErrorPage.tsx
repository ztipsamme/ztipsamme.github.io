import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: unknown = useRouteError()
  console.error(error)

  if (!error) return null

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <i>
        {(error as { statusText?: string }).statusText ||
          (error as Error).message}
      </i>
    </div>
  )
}
