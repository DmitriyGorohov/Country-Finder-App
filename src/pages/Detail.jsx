import React from 'react'

const Detail = ({match}) => {
	return <div>{match.params.name}</div>
}

export default Detail
