import React from 'react';
import InputAddress from './InputAddress';

const CoinSelector = (props) => (
    <div className='col-md-5'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='btn-group' dropdown>
                    <button type="button" className="btn btn-primary dropdown-toggle">
                        Coins <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        <li>
                            <a>Coin Symbol</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-group">
                    <InputAddress 
                     className='form-control'
                     type='text'
                     label={props.label}
                     />
                    {
                    props.direction === 'out' && <InputAddress className='form-control' type='text' label='amount' />
                    }
                </div>
                {
                props.direction === 'in' &&
                <div className="">
                    <div>Deposit Limit: 4.900$ </div>
                    <div>Minimum Amount: 15</div>
                    <div>MinerFee: 0.001</div>
                    <div>Rate: 00 </div>
                </div>
                }
            </div>
        </div>
    </div>
);

export default CoinSelector;