// External libraries
import React from 'react'
import Head from 'next/head'

// Components
import Body from '../components/pages/NotFound'

const NotFound: React.FC = () => {
	return (
		<>
			<Head>
				<title>Oops!</title>
			</Head>
			<Body />
		</>
	)
}

export default NotFound
