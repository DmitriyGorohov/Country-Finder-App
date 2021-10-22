import React from 'react'
import axios from 'axios'
import {ALL_COUNTRIES} from '../config'
import {useHistory} from 'react-router-dom'

import List from '../components/List'
import Card from '../components/Card'
import Controls from '../components/Controls'

const HomePage = ({setCoutries, countries}) => {
	const [filteredCoutries, setFilteredCouteries] = React.useState(countries)

	const {push} = useHistory()

	const handleSearch = (search, region) => {
		let data = [...countries]

		if (region) {
			data = data.filter((c) => c.region.includes(region))
		}
		if (search) {
			data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
		}

		setFilteredCouteries(data)
	}

	React.useEffect(() => {
		if (!countries.length) axios.get(ALL_COUNTRIES).then(({data}) => setCoutries(data))
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<Controls onSearch={handleSearch} />
			<List>
				{filteredCoutries.map((c) => {
					const countryInfo = {
						img: c.flags.png,
						name: c.name,
						info: [
							{title: 'Population', description: c.population},
							{title: 'Region', description: c.region},
							{title: 'Capital', description: c.capital},
						],
					}
					return <Card key={c.name} onClick={() => push(`/country/${c.name}`)} {...countryInfo} />
				})}
			</List>
		</>
	)
}

export default HomePage
