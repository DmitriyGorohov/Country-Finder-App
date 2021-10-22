import React from 'react'
import Main from './components/Main'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

function App() {
	const [countries, setCoutries] = React.useState([])
	return (
		<>
			<Header />
			<Main>
				<Switch>
					<Route exact path='/'>
						<HomePage countries={countries} setCoutries={setCoutries} />
					</Route>
					<Route path='/country/:name' component={Detail} />
					<Route component={NotFound} />
				</Switch>
			</Main>
		</>
	)
}

export default App
