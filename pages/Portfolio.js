/* 
type: page
name: Portfolio
*/

import Router from 'next/router'
import React from 'react'

export default function Redirect() {
  React.useEffect(() => {
    Router.push('/')
  }, [])
  return <></>
}
