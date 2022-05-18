// External libraries
import React from 'react'

// Components
import Header from '../../common/Header'

// Styled
import {
	Container,
	Content
} from './styles'

const Home: React.FC = () => {
	return (
		<Container>
			<Content>
				<h2>Oops! :/</h2>
				<h5>This page not found!</h5>
			</Content>
			<Header />
		</Container>
	)
}

export default Home
