// External libraries
import styled, {
	keyframes 
} from 'styled-components'

// Styled
import mq from '../../../styles/breakpoint'

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mq({ 
		padding: [
			'16px',
			'24px',
			'5rem 5rem 5rem 5rem',
			'5rem 5rem 5rem 5rem'
		]
	})};
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h5 {
    ${mq({
		width: [
			'100%',
			'100%',
			'fit-content',
			'fit-content'
		],
		textAlign: [
			'center',
			'center',
			'left',
			'left'
		]
	})}
  }

  ${mq({
		flexDirection: [
			'column',
			'column',
			'row',
			'row'
		]
	})}
`

export const Options = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 12px;

  display: grid;
  grid-gap: 16px;

  button {
    width: 100%;
    height: fit-content;

    padding: 16px;

    background-color: transparent;
    border-radius: 12px;

    color: ${props => props.theme.colors.text};

    animation: ${fadeIn} 0.75s;
    transition: 1s;

    &:hover {
      filter: brightness(65%);
    }

    ${mq({
		cursor: [
			'default',
			'default',
			'pointer',
			'pointer'
		]
	})}
  }

  .options-hard-skills {
    border: 1.5px solid ${props => props.theme.colors.secondary};
  }

  .selected-hard-skills {
    border: 1.5px solid ${props => props.theme.colors.tertiary};
  }

  ${mq({
		gridTemplateColumns: [
			'1fr 1fr',
			'1fr 1fr',
			'1fr 1fr',
			'1fr 1fr 1fr'
		]
	})}
`
