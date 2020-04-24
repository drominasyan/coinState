import React from 'react';
import CoinDetails from '../../containers/CoinDetails'
import Link from 'next/link'

const  Details = (props) => {
    const { id } = props;
    return id && <CoinDetails id = {id}/>
}
Details.getInitialProps = ({query: {id}}) => {
	return {id}
}

export default Details;