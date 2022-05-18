// External libraries
import styled from 'styled-components'
import {
	Switch
} from '@mui/material'

// Styled
import mq from '../../../styles/breakpoint'

interface HeaderProps {
  isActive: boolean
}

export const Container = styled.div<HeaderProps>`
	width: 100%;
	height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.gray_700};

  position: fixed;
  top: 0;
  left: 0;

  ${mq({
		flexDirection: [
			'column',
			'column',
			'row',
			'row'
		],
		height: [
			props => props.isActive ? '100%' : '64px',
			props => props.isActive ? '100%' : '64px',
			'64px',
			'64px'
		],
		padding: [
			0,
			0,
			'0px 16px',
			'0px 16px'
		]
	})}
`

export const ContentImage = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  ${mq({
		position: [
			'absolute',
			'absolute',
			'static',
			'static'
		],
		top: [
			9,
			9,
			null,
			null
		]
	})}
`

export const Content = styled.div<HeaderProps>`
	width: 100%;
  height: 100%;

	padding-right: 64px;

	align-items: center;

  h5 {
    font-size: 1.5rem;
    letter-spacing: 2.5px;
    color: ${props => props.theme.colors.primary};
  }

  ${mq({
		marginTop: [
			64,
			64,
			0,
			0
		],
		paddingRight: [
			0,
			0,
			64,
			64
		],
		display: [
			props => props.isActive ? 'flex' : 'none',
			props => props.isActive ? 'flex' : 'none',
			'flex',
			'flex'
		],
		justifyContent: [
			'center',
			'center',
			'flex-end',
			'flex-end'
		],
		flexDirection: [
			'column',
			'column',
			'row',
			'row'
		]
	})};
`

interface LinkProps {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  line-height: 18px;
  text-decoration: none;
  color: ${(props) => props.isActive
		? props.theme.colors.primary
		: props.theme.colors.link};

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.gray_400};
  }

  ${mq({
		heigth: [
			'64px',
			'64px',
			'100%',
			'100%'
		],
		width: [
			'100%',
			'100%',
			'fit-content',
			'fit-content'
		]
	})}
`

export const ButtonMenu = styled.button`
  width: 64px;
  height: 64px;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  font-size: 2rem;
  color: ${props => props.theme.colors.primary};

  position: fixed;
  top: 0;
  left: 12px;

  ${mq({
		display: [
			'flex',
			'flex',
			'none',
			'none'
		]
	})};
`

export const SwitchDarkLight = styled(Switch)`
	position: absolute;
	right: 12px;
	top: 12px;
	bottom: auto;
`
