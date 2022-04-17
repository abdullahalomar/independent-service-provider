import React from 'react';
import sleep from '../../images/working-out-on-no-sleep_59p5.jpg';

const NotFount = () => {
    return (
        <div>
            <img src={sleep} width={1349} height={500} alt="" />
            <h2 className='text-center'>Opps!! You came to the wrong place!!</h2>
        </div>
    );
};

export default NotFount;