import React from 'react'
import Paper from 'material-ui/Paper'
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import './ProductTile.css'

const ShopIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
    </SvgIcon>
)

export default class ProductTile extends React.Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    thisProductChecked = () => {
        return this.props.allProducts.findIndex((product) => {
            return this.props.product.name === product.name
        })
    }

    getProductLinks = () => {
        return Object.keys(this.props.product.shop).map((key, i) => {
          let url = this.props.product.shop[ key ]
          if(String(key) === 'banggood') url += '?p=H101138294533201701A'
          if(String(key) === 'piroflip' || String(key) === 'getfpv') url += '?s=fpvbuildcalc'
          return { name: key, url }
        })
      }
    
    renderProductLinks = () => {
        return this.getProductLinks().map((link, i) => {
            return <a key={i} className="ProductLink" href={link.url} target="_blank">{link.name}</a>
        })
    }

    render = () => {
        return (
            <div className="ProductTile" >

                <Paper className="Paper" zDepth={1}>

                    <div>
                        <a onClick={this.handleOpen} style={{ cursor: 'pointer'}}>
                            <img className='ProductImage'
                                src={this.props.product.image}
                                alt={this.props.product.name} />
                        </a>
                        <Dialog
                            title={this.props.product.name}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <a href={this.getProductLinks()[0].url} target="_blank" className="ProductLink">
                                <div className='CenterImage'>
                                    <img className='ProductImageLarge'
                                        src={this.props.product.image}
                                        alt={this.props.product.name} />
                                </div>
                            </a>
                            <p>{this.props.product.notes}</p>
                            <h3>Shopping Links</h3>
                            {
                                this.renderProductLinks()
                            }
                        </Dialog>
                    </div>
                    <div >
                        <span className='ProductName'>{this.props.product.name}</span>
                    </div>

                    {
                        Object.keys(this.props.product.shop).map((key, i) => {
                            {
                                return <div className="ProductDetail" >
                                    <span className='ProductPrice'>$ {this.props.product.price.toFixed(2)}</span>
                                    <Checkbox checked={this.thisProductChecked() !== -1} className="Checkbox" style={{ float: "left", width: "20%" }} iconStyle={{ fill: '#2794a0' }} onClick={() => {
                                        const index = this.props.allProducts.findIndex((product) => { return this.props.product.name === product.name });
                                        if (index !== -1) {
                                            return this.props.onProductDeselect(this.props.product);
                                        }
                                        
                                        this.props.onProductSelect(this.props.product);
                                    }} />
                                    <div>
                                        <IconButton className="ProductLink" tooltip={key} key={i} href={this.getProductLinks()[0].url} target="_blank">
                                            <ShopIcon color={"#2794a0"} className="Icon" />
                                        </IconButton>
                                    </div>
                                </div>
                            }
                        })[0]
                    }

                </Paper>
            </div>
        )
    }

}

