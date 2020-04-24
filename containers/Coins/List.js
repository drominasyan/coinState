import React from 'react';
import { connect } from 'react-redux';
import coinsActions from '../../Redux/CoinsList/actions'
import coinsDetailsActions from '../../Redux/CoinDetails/actions'
import {columns} from './utils'
import PropTypes from 'prop-types';
import { Tabs, Tab} from 'react-bootstrap'
import ListTable from '../../Components/ListTable'
import {addFavoritList, getFavoritsList} from '../../helpers/utils'

class List extends React.Component {

    static propTypes = {
        list        : PropTypes.array.isRequired,
        UI          : PropTypes.object.isRequired,
        detailsUI   : PropTypes.object.isRequired,
        listReload  : PropTypes.func.isRequired,
        uiRefresh   : PropTypes.func.isRequired,
    }

    state = {
        favorits: [],
    }

    componentDidMount(){
        window.addEventListener('scroll', this.listenToScroll);
        const {listReload, uiRefresh} = this.props;
        const favorits = getFavoritsList();
        this.setState({favorits})
        listReload();
    }

    loadMoreCoins = () => {
        const { listReload, uiRefresh, UI } = this.props;
        const { skip } = UI;
        uiRefresh({
            skip : skip + 1, 
        })
        listReload();
    }

    listenToScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight) {
                this.loadMoreCoins();
        }
    }

    updateFavorits = (id) => {
        const favorits = addFavoritList(id);
        this.setState({favorits})
    }

    render() {
        const { list, UI, uiRefresh, listReload } = this.props;
        const { favorits } = this.state;
        const favoritsList = list.filter(item => favorits.includes(item.id));
        return (
            <Tabs defaultActiveKey="Coins" transition={false}>
                <Tab eventKey="Coins" title="Coins">
                    <ListTable 
                        columns={columns}
                        list={list}
                        UI={UI}
                        listReload={listReload}
                        uiRefresh={uiRefresh}
                        showMore = {true}
                        favorits={favorits}
                        updateFavorits={this.updateFavorits}
                    />
                </Tab>
                <Tab eventKey="favorites" title="Favorites">
                    <ListTable 
                        columns={columns}
                        list={favoritsList}
                        UI={UI}
                        listReload={listReload}
                        showMore = {false}
                        favorits={favorits}
                        uiRefresh={uiRefresh}
                        updateFavorits={this.updateFavorits}
                    />
                </Tab>
            </Tabs>
        );
    }
}

function mapStateToProps(state) {
  const { Coins, CoinDetails } = state;
  return {
    list  : Coins.get('list'),
    UI    : Coins.get('UI'),
    detailsUI : CoinDetails.get('UI'),
  };
}
const mapDispatchToProps = {
  listReload : coinsActions.listReload,
  uiRefresh  : coinsActions.uiRefresh,
  uiDetailsRefresh  : coinsDetailsActions.uiRefresh,
}
export default connect(mapStateToProps, mapDispatchToProps)(List);