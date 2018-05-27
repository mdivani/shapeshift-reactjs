import React from 'react';

const CoinSelector = (props) => (
    <div className='col-md-5'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='btn-group' dropdown>
                    <button type="button" class="btn btn-primary dropdown-toggle" dropdown-toggle>
                        Coins <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li>
                            <a>Coin Symbol</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-group">
                    <div>
                        <label>{props.label}</label>
                        <input type="text"  className="form-control" />
                    </div>
                    <div  className="">
                        <label>Amount</label>
                        <input type="text"  className="form-control" />
                    </div>
                </div>
                <div className="">
                    <div>Deposit Limit: 4.900$ </div>
                    <div>Minimum Amount: 15</div>
                    <div>MinerFee: 0.001</div>
                    <div>Rate: 00 </div>
                </div>
            </div>
        </div>
    </div>
);

export default CoinSelector;