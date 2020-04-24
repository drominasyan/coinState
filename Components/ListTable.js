import React from 'react';
import Link from 'next/link'
import {starFull} from 'react-icons-kit/icomoon/starFull'
import { Icon } from 'react-icons-kit'
import { Spinner} from 'react-bootstrap'

const  ListTable = (props) => {
    
    const renderValue = (columnItem, listItem, index) => {
        const { UI, favorits, updateFavorits } = props;
        let liked = favorits.includes(listItem.id) ? 'active' : 'inactive';
        switch (columnItem.dataIndex) {
            case 'id':
                return index + 1;
            case 'name':
                return <>
                            <div className = {`starList ${liked}`}>
                                <Icon icon={starFull} size={20} onClick={() =>updateFavorits(listItem.id)}/>
                            </div>
                            <Link href={`/coins/${listItem.id}`}>
                                <a>
                                    <img src={listItem.icon} className = 'coinIcon'/>
                                    {listItem[columnItem.dataIndex]}
                                </a>
                            </Link>
                        </>
            default : 
            return listItem[columnItem.dataIndex]
        }
    }

    const { columns,  list, UI : { loading }} = props;
    return <div className='table'>
                {columns.map((columnItem, index) => (
                    <div className='cols' key={`${columnItem.key}_${index}`}>
                        <div className='colTitle'>{columnItem.title}</div>
                        <div className = 'rows'>
                            {list.map((listItem, index) => <div className='rowItem' key={`${listItem.id}_${index}`}>
                                {renderValue(columnItem, listItem, index)}
                            </div>)}
                        </div>
                    </div>)
                )}
            {loading && <div className = 'loadingDetailsPage'>
                <Spinner animation="border" variant="secondary"/>
            </div>}
        </div>
}


export default React.memo(ListTable);