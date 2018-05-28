import React from 'react';
import CoinSelector from './CoinSelector';
import ShiftButton from './ShiftButton';

const CoinTrader = () => (
    <div className='container margin-top--medium'>
        <div className='row'>
            <CoinSelector
              label='Return Address'
              direction='in'
             />
            <CoinSelector
              label='Withdrawal Address'
              direction='out'
             />
        </div>
        <ShiftButton />
    </div>
);

export default CoinTrader;