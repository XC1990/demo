import React from 'react'
import ProductTile from '../product-tile/ProductTile'
import Frames from '../products/frames'
import Fcs from '../products/fcs'
import Motors from '../products/motors'
import Escs from '../products/esc'
import Cameras from '../products/camera'
import Vtxs from '../products/vtx'
import Pdbs from '../products/pdb'
import Antennas from '../products/antenna'
import Receivers from '../products/receiver'
import Props from '../products/props'
import ReactTooltip from 'react-tooltip'
import FontIcon from 'material-ui/FontIcon';
import ToolTips from './Tooltip'

import './ProductGrid.css'



function productRender(products, props) {

    const array = Object.keys(products)
    array.sort((a, b) => {
        return products[a].price - products[b].price
    })
    return array.map((key, i) => {
        return <ProductTile
            key={i}
            product={products[key]}
            allProducts={props.products}
            onProductSelect={props.onProductSelect}
            onProductDeselect={props.onProductDeselect} />
    })
}


const ProductGrid = (props) => {
    const iconStyles = {color: '#2794a0', fontSize: '0.7em', marginLeft:'1em', marginTop:'2em' }

    return (
        <div className='ProductGrid'>
            <div className='ProductGridColumn'>
                <h3 className="ColumnHead">Frames  
                    <FontIcon data-tip data-for="FramesInfoTooltip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Frames, props)}
            </div>
            <div className='ProductGridColumn'>
            <h3 className="ColumnHead">Flight Controllers  
                    <FontIcon data-tip data-for="FlightControllerToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Fcs, props)}
            </div>

            <div className='ProductGridColumn'>
            <h3 className="ColumnHead">Motors  
                    <FontIcon data-tip data-for="MotorsToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Motors, props)}
            </div>
            <div className='ProductGridColumn'>
            <h3 className="ColumnHead">Speed Controllers  
                    <FontIcon data-tip data-for="SpeedControllersToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Escs, props)}
            </div>
            <div className='ProductGridColumn'>
            <h3 className="ColumnHead">Cameras  
                    <FontIcon data-tip data-for="CamerasToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Cameras, props)}
            </div>
            <div className='ProductGridColumn'>
                <h3 className="ColumnHead">Video Transmitter  
                    <FontIcon data-tip data-for="VTXToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Vtxs, props)}
            </div>
            <div className='ProductGridColumn'>
            <h3 className="ColumnHead">Pdbs  
                    <FontIcon data-tip data-for="AntennaToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Pdbs, props)}
            </div>
            <div className='ProductGridColumn'>
            <h3 className="ColumnHead">Antennas  
                    <FontIcon data-tip data-for="ReceiverToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Antennas, props)}
            </div>
            <div className='ProductGridColumn'>
            <h3 className="ColumnHead">Receivers  
                    <FontIcon data-tip data-for="PDBToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Receivers, props)}
            </div>
            <div className='ProductGridColumn'>
            <h3 className="ColumnHead">Propellers  
                    <FontIcon data-tip data-for="PropellersToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
                </h3>
                {productRender(Props, props)}
            </div>
            <ToolTips/>
        </div>
    )
}

export default ProductGrid