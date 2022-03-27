import React from 'react';
import './index.css'

const Vector = ({ color }) => {

    return ( 
        <div className='pokeball-vector'>
            <svg width="70" height="32" viewBox="0 0 70 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2112 31.6494C9.3279 31.6494 6.44461 31.6494 3.56131 31.6494C0.709116 31.6494 0.629148 31.6317 1.18892 28.8594C4.01447 14.8917 12.1668 5.44653 25.8236 1.38593C45.8511 -4.5717 66.6651 9.36053 69.3129 30.0989C69.4551 31.214 69.3262 31.6894 68.0378 31.6761C61.978 31.6183 55.9138 31.6272 49.8495 31.6716C48.7566 31.6805 48.3923 31.254 48.0147 30.2678C45.9178 24.7766 41.3685 21.5646 35.8907 21.5557C30.2884 21.5468 25.868 24.7011 23.6689 30.4055C23.2779 31.4184 22.7714 31.6983 21.7452 31.6761C18.5687 31.6094 15.3877 31.6494 12.2112 31.6494Z" fill='white' className={color}/>
            </svg>
            <svg width="70" height="32" viewBox="0 0 70 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1445 0.327123C15.25 0.327123 18.3554 0.389321 21.4564 0.296025C22.6692 0.260483 23.2335 0.615898 23.6777 1.78876C25.748 7.23993 30.3373 10.4298 35.8418 10.4076C41.3285 10.3853 46.0466 7.11109 48.0103 1.75322C48.4234 0.624786 48.9032 0.296027 50.0317 0.304912C55.9449 0.353781 61.8581 0.367108 67.7668 0.296025C69.1752 0.278254 69.5084 0.620342 69.2907 2.05088C66.705 19.2174 52.7195 31.608 35.4952 31.9234C18.8663 32.2255 4.39653 20.1814 1.2289 3.39701C0.651352 0.327125 0.651352 0.327123 3.72124 0.327123C6.52457 0.322681 9.33678 0.327123 12.1445 0.327123Z" fill="white"/>
            </svg>
        </div>
     );
}
 
export default Vector;