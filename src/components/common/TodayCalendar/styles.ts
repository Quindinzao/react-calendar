// External libraries
import styled from 'styled-components'

// Styled
import mq from '../../../styles/breakpoint'

interface ButtonMenuProps {
  isActive: boolean
}

export const ContainerCalendar = styled.div<ButtonMenuProps>`
  width: fit-content;
  height: fit-content;

  display: ${props => props.isActive ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  bottom: 72px;

  .react-calendar {
    background-color: ${props => props.theme.colors.background_calendar};
    border: none;
    border-radius: 8px;

    button {
      margin: 3px;
      padding: 5px 0;

      border: none;
      border-radius: 3px;
      color: ${props => props.theme.colors.text};

      transition: 0.3s;
      
      &:hover {
        background-color: ${props => props.theme.colors.tertiary}
      }

      &:active {
        background-color: ${props => props.theme.colors.tertiary}
      }
    }
  }

  .react-calendar__navigation {
    display: flex;
    background-color: ${props => props.theme.colors.gray_300};
    border-radius: 6px 6px 0 0;

    .react-calendar__navigation__label {
      font-weight: bold;
      color: #FFFFFF;
      background-color: ${props => props.theme.colors.gray_300};
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
      color: #FFFFFF;
      background-color: ${props => props.theme.colors.gray_300};
    }
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    border-radius: 0 0 6px 6px;

    .react-calendar__tile {
      max-width: initial !important;

      &:active {
        background-color: ${props => props.theme.colors.tertiary};
      }
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.3;
  }

  .react-calendar__tile--range {
    box-shadow: 0 0 3px 1px ${props => props.theme.colors.gray_300};
    background-color: ${props => props.theme.colors.tertiary};
  }

  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
      border-radius: 6px;
    }
  }

  ${mq({
		width: [
			'100%',
			'100%',
			'fit-content',
			'fit-content'
		],
		right: [
			0,
			0,
			72,
			72
		]
	})}
`

export const ButtonMenu = styled.button`
  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.tertiary};
  border: none;
  border-radius: 32px;

  font-size: 2rem;
  color: #FFFFFF;

  position: fixed;
  bottom: 16px;
  right: 16px;

  transition: 0.5s;

  :hover {
    filter: brightness(75%);
  }

  ${mq({
		cursor: [
			'default',
			'default',
			'pointer',
			'pointer'
		]
	})}
`
