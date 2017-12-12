import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import './ShoppingList.css'
import Frames from '../products/frames'

const ShoppingList = (props) => {
    return (<Card className="Card">
        <CardText>
            {
                props.products.length > 0 ?
                    <Table selectable={true} multiSelectable={true} onCellClick={(row,col)=>{
                        if(col===-1){
                            props.onProductDeselect(props.products[row]);
                        }
                            
                    }}>
                        <TableHeader displayRowCheckbox={true} displaySelectAll={false} enableSelectAll={false}>
                            <TableRow className="TableRow">
                                <TableHeaderColumn style={{ padding: '0px', }}>Product</TableHeaderColumn>
                                <TableHeaderColumn style={{ padding: '5px', textAlign: 'right' }}>Price</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="TableBody" displayRowCheckbox={true} deselectOnClickaway={false} >
                            {
                                props.products.map((product, i) => {
                                    return <TableRow selected={true} className="TableRow"  key={i}>
                                        <TableRowColumn style={{ padding: '0px', textAlign: 'left' }}><span>{product.name}</span>
                                        </TableRowColumn>
                                        <TableRowColumn style={{ padding: '5px', textAlign: 'right' }}><span>$ {product.price}</span>
                                        </TableRowColumn>
                                    </TableRow>
                                })
                            }

                        </TableBody>
                    </Table> :
                    <div className='NoProduct'>No product selected</div>
            }

        </CardText>

        <CardActions className="CardAction" style={{ padding: '10px', textAlign: 'right' }}>
        {
                props.products.length > 0 ?
                <div>
                <strong>Total Cost:
                            {
                        '  $' + props.products
                            .map((product, i) => {
                                return product.price
                            })
                            .reduce((last, next) => {
                                return last + next
                            })
                            .toFixed(2)
                    }
                </strong>
            </div>:
            <strong>Total Cost: </strong>
        }
            
        </CardActions>
    </Card>
    )
}

export default ShoppingList; 