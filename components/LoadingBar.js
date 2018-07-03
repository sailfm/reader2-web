import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const LoadingBar = () => (
  <Head>
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
  </Head>
)

export default LoadingBar
