// External libraries
import {
	createContext, 
	useEffect, 
	useState 
} from 'react'
import {
	ThemeProvider 
} from 'styled-components'

// Styled
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

interface DarkLightContextProps {
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  // handleChange: (checked, setChecked) => void
}

export const DarkLightContext = createContext<DarkLightContextProps>({} as DarkLightContextProps)

export const DarkLightProvider = ({
	children 
}) => {
	const [ theme, setTheme ] = useState('')
	const [ checked, setChecked ] = useState(false)

	useEffect(() => {
		setTheme(localStorage.getItem('theme'))
		if (!theme) return

		if (checked) localStorage.setItem('theme', 'light')
		else localStorage.setItem('theme', 'dark')
		
		setTheme(localStorage.getItem('theme'))
	}, [ checked ])

	useEffect(() => {
		if (theme === 'light') setChecked(true)
		else setChecked(false)
	}, [ theme ])

	return (
		<DarkLightContext.Provider value={{
			checked,
			setChecked
		}}>
			<ThemeProvider theme={theme === 'dark' ? dark : light}>
				{children}
			</ThemeProvider>
		</DarkLightContext.Provider>
	)
}