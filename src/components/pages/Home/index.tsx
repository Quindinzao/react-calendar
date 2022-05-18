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
				<h2>Next.js Structure</h2>
				<h5>A site with calendar by Quindinzão.</h5>
			</Content>
			<Header home={true} />
		</Container>
	)
}

export default Home
