import React from 'react';
import { connect } from 'react-redux';
import coinsActions from '../../Redux/CoinDetails/actions'
import PropTypes from 'prop-types';
import { Spinner} from 'react-bootstrap'
import {starFull} from 'react-icons-kit/icomoon/starFull'
import { Icon } from 'react-icons-kit'
import {addFavoritList, getFavoritsList} from '../../helpers/utils'

class Details extends React.Component {

    static propTypes = {
        baseData    : PropTypes.object.isRequired,
        UI          : PropTypes.object.isRequired,
        dataReload  : PropTypes.func.isRequired,
        uiRefresh   : PropTypes.func.isRequired,
        id          : PropTypes.string.isRequired,
    }

    state = {
        favorits: [],
    }

    componentDidMount(){
        const { dataReload, id, uiRefresh} = this.props;
        const favorits = getFavoritsList();
        this.setState({favorits});
        dataReload(id);
    }

    addFavoritList = () => {
        const { id, uiRefresh} = this.props;
        const favorits = addFavoritList(id);
        this.setState ({favorits});
    }

    render() {
        const {baseData, UI : {loading}, id} = this.props;
        const {favorits} = this.state;
        const {availableSupply, exp, icon, name, totalSupply, twitterUrl, websiteUrl, volume, marketCap, symbol} = baseData;
        let liked = favorits.includes(id) ? 'active' : 'inactive';
        if(loading) {
            return <div className = 'loadingDetailsPage'>
                <Spinner animation="border" variant="secondary"/>
            </div>
        }
        return (
            <>
                <div className='title'>
                    <div className = {`star ${liked}`}>
                        <Icon icon={starFull} size={64} onClick={this.addFavoritList}/>
                    </div>
                    <h3>
                        <img src={icon} />{`${name} (${symbol})`}
                    </h3>
                </div>
                <div className = 'details'>
                    <div>
                        <div className='cup'>
                            <span className='heading'>MARKET CAP</span>
                            <span>{marketCap}</span>
                        </div>
                        <div className='volume'>
                            <span className='heading'>VOLUME 24H</span>
                            <span>{volume}</span>
                        </div>
                    </div>
                    <div>
                        <div className='avSuply'>
                            <span className='heading'>AVAILABLE SUPPLY</span>
                            <span>{availableSupply}</span>
                        </div>
                        <div className='volume'>
                            <span className='heading'>TOTAL SUPPLY</span>
                            <span>{totalSupply}</span>
                        </div>
                    </div>
                    <div className='websites'>
                        <span className='heading'>MARKET CAP</span>
                        <span>{websiteUrl}</span>
                        <span>{twitterUrl}</span>
                    </div>
                    <div className='explore'>
                        {exp && exp.map((item, index) => <a key={index} target='blanck' href={item}>{`Explore ${index + 1}`}</a>)}
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
  return {
    baseData : state.CoinDetails.get('baseData'),
    UI : state.CoinDetails.get('UI')
  };
}

const mapDispatchToProps = {
  dataReload : coinsActions.baseDataReload,
  uiRefresh  : coinsActions.uiRefresh,
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);