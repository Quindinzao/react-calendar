// External libraries
import React, {
	useState 
} from 'react'
import Calendar from 'react-calendar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

// Styled
import {
	ButtonMenu,
	ContainerCalendar
} from './styles'

const TodayCalendar: React.FC = () => {
	const [ isActive, setIsActive ] = useState(false)
	const [ today, setDay ] = useState(new Date())

	return (
		<>
			<ContainerCalendar isActive={isActive}>
				<Calendar value={today} onChange={setDay} />
			</ContainerCalendar>
			<ButtonMenu onClick={() => setIsActive(!isActive)}>
				<CalendarMonthIcon style={{
					width: '50%', height: '50%' 
				}} />
			</ButtonMenu>
		</>
	)
}

export default TodayCalendar
