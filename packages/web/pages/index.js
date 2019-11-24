import React from 'react'
import Head from 'next/head'

import Logo from '../components/Logo'
import '../sass/index.sass'

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Scratchpay User Management UI</title>

        {/* Semantic UI theme */}
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      {/* UI Code */}
      <Logo
        symbol="https://storage.googleapis.com/scratchpay-com-assets/challenges/paw_symbol.png"
        logo="https://storage.googleapis.com/scratchpay-com-assets/challenges/logo.png"
      />

      <h1>Users</h1>
      <h2>GUI for managing users</h2>
    </main>
  )
}
