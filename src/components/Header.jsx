import React from 'react'
import {IoMoon} from 'react-icons/io5'
import styled from 'styled-components'
import {Container} from './Container'

const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`

const Title = styled.a.attrs({
	href: '/',
})`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-decoration: none;
	font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
	display: flex;
	align-items: center;
	color: var(--colors-text);
	font-size: var(--fs-sm);
	cursor: pointer;

	span {
		margin-left: 0.75rem;
		text-transform: capitalize;
	}
`

const Header = () => {
	const [theme, setTheme] = React.useState('light')

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	React.useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<ModeSwitcher onClick={toggleTheme}>
						<IoMoon size='14px' /> <span>{theme} Theme</span>
					</ModeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	)
}

export default Header
