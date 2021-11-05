import React from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import {IoArrowBack} from 'react-icons/io5'
import {searchByCountry} from '../config'
import {Button} from '../components/Button'
import {Info} from '../components/Info'

const Detail = () => {
	const {name} = useParams()
	const {push, goBack} = useHistory()
	const [country, setCountry] = React.useState(null)

	console.log(country)

	React.useEffect(() => {
		axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]))
	}, [name])

	return (
		<div>
			<Button onClick={goBack}>
				<IoArrowBack />
				Back
			</Button>
			{country && <Info {...country} push={push} />}
		</div>
	)
}

export default Detail
