import React from 'react';
import { connect } from 'react-redux';
import coinsActions from '../../Redux/Coins/actions'
import PropTypes from 'prop-types';
class List extends React.Component {

    static propTypes = {
        list        : PropTypes.array.isRequired,
        UI          : PropTypes.object.isRequired,
        listReload  : PropTypes.func.isRequired,
        uiRefresh   : PropTypes.func.isRequired,
    }

    static getInitialProps() {}

    componentDidMount(){
        const {listReload} = this.props;
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

    render() {
        return (
            <div>Coming Soon ... </div>
        );
    }
}

function mapStateToProps(state) {
  
  return {
    list    : state.Coins.get('list'),
    UI : state.Coins.get('UI')
  };
}
const mapDispatchToProps = {
  listReload : coinsActions.listReload,
  uiRefresh  : coinsActions.uiRefresh,
}
export default connect(mapStateToProps, mapDispatchToProps)(List);