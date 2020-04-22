import React from 'react';
import { connect } from 'react-redux';
import coinsActions from '../Redux/Coins/actions'
import CoinsTable from '../containers/Coins'
const  App = () => <CoinsTable />
export default App;