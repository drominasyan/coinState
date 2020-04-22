import React from 'react';
import { connect } from 'react-redux';
import coinsActions from '../../Redux/Coins/actions'
import {columns} from './utils'
import PropTypes from 'prop-types';
import Link from 'next/link'
import {Container, Tabs, Tab, Spinner} from 'react-bootstrap'
import { Icon } from 'antd';
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
        const { list, UI } = this.props;
        const { loading } = UI;
        const renderValue = (columnItem, listItem, index) => {
            switch (columnItem.dataIndex) {
            case 'id':
                return index + 1;
            case 'name':
                return <Link href={`/coins/${listItem.id}`}>
                    <a>
                        <img src={listItem.icon} className = 'coinIcon'/>
                        {listItem[columnItem.dataIndex]}</a>
                    </Link>
                    
            default : 
                return listItem[columnItem.dataIndex]
        }
        }
        return (
            <Tabs defaultActiveKey="Coins" transition={false}>
                <Tab eventKey="Coins" title="Coins">
                    <div className='table'>                
                        {columns.map(columnItem => (
                            <div className='cols' key={columnItem.key}>
                                <div className='colTitle'>{columnItem.title}</div>
                                <div className = 'rows'>
                                    {list.map((listItem, index) => <div className='rowItem' key={listItem.id}>
                                        {renderValue(columnItem, listItem, index)}
                                    </div>)}
                                </div>
                            </div>)
                        )}
                        {loading && <Spinner animation="border" variant="secondary" className='spinner'/>}
                        <button onClick={this.loadMoreCoins} className='showMore'>Show More</button>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    {/* <Sonnet /> */}
                </Tab>
            </Tabs>
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