// External libraries
import React, {
	useContext,
	useState 
} from 'react'

// Hooks
import {
	DarkLightContext 
} from '../../../hooks/contexts/DarkLightContext'

// Assets
import ReactIcon from '../../../assets/images/reactjs-icon.svg'

// Styled
import {
	ButtonMenu,
	Container,
	Content,
	ContentImage,
	Link,
	SwitchDarkLight
} from './styles'

interface HeaderProps {
  home?: boolean
	skills?: boolean
}

const Header: React.FC<HeaderProps> = ({
	home,
	skills
}) => {
	const [ isActive, setIsActive ] = useState(false)
	
	const {
		checked, setChecked 
	} = useContext(DarkLightContext)

	const handleChange = () => setChecked(!checked)

	return (
		<Container isActive={isActive}>
			<ContentImage>
				<ReactIcon height={48} />
			</ContentImage>
			<Content isActive={isActive}>
				<Link href='/' isActive={home}>
          HOME
				</Link>
				<Link href='/skills' isActive={skills}>
          SKILLS
				</Link>
			</Content>
			<ButtonMenu onClick={() => setIsActive(!isActive)}>
        &#9776;
			</ButtonMenu>
			<SwitchDarkLight
				checked={checked}
				onChange={handleChange}
				color='default'
			/>
		</Container>
	)
}

export default Header
