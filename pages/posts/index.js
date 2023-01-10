import React from 'react'

import Router from 'next/router'

export default function Posts() {
  React.useEffect(() => {
    Router.push('/')
  }, [])

  return <div></div>
}
