import React from 'react'
import styled from 'styled-components'
import {CustomSelect} from './CustomSelect'
import Search from './Search'

const options = [
	{value: 'Africa', label: 'Africa'},
	{value: 'America', label: 'America'},
	{value: 'Azia', label: 'Azia'},
	{value: 'Europe', label: 'Europe'},
	{value: 'Oceania', label: 'Oceania'},
]

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	@media (min-width: 767px) {
		flex-direction: row;
		// juctify-content: space-between;
		align-items: center;
	}
`

const Controls = () => {
	const [search, setSearch] = React.useState('')
	const [region, setRegion] = React.useState('')
	return (
		<Wrapper>
			<Search search={search} setSearch={setSearch} />
			<CustomSelect
				options={options}
				placeholder='Filter by Region'
				isClearable
				isSearchable={false}
				value={region}
				onChange={setRegion}
			/>
		</Wrapper>
	)
}

export default Controls
