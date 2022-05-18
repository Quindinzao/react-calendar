// External libraries
import React from 'react'
import {
	AppProps 
} from 'next/app'
import 'react-calendar/dist/Calendar.css'

// Components
import TodayCalendar from '../components/common/TodayCalendar'

// Hooks
import {
	DarkLightProvider 
} from '../hooks/contexts/DarkLightContext'

// Styled
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({
	Component, pageProps 
}) => {
	return (
		<DarkLightProvider>
			<Component {...pageProps} />
			<GlobalStyle />
			<TodayCalendar />
		</DarkLightProvider>
	)
}

export default MyApp
