import * as React from 'react';
import Icon, { IconProps } from './icon';

export const Wifi: React.FC<IconProps> = (props) => (
    <Icon viewBox="0 0 512.001 512.001" className="wifi" {...props} >
        <circle cx="255.001" cy="433.5" r="33" />
        <path d="M506.632,154.864C440.902,84.341,351.895,45.501,255.997,45.5C160.107,45.501,71.1,84.341,5.369,154.864
			c-7.53,8.08-7.085,20.736,0.995,28.267c8.081,7.53,20.736,7.086,28.267-0.995C92.711,119.82,171.327,85.501,256.004,85.5
			c84.67,0.001,163.286,34.32,221.366,96.636c3.939,4.226,9.28,6.364,14.635,6.364c4.883,0,9.778-1.778,13.632-5.369
			C513.717,175.599,514.163,162.944,506.632,154.864z"/>
        <path d="M433.194,237.458c-48.587-48.954-111.516-75.913-177.196-75.911c-65.695,0.001-128.625,26.961-177.197,75.913
			c-7.78,7.841-7.731,20.504,0.11,28.284c7.841,7.78,20.504,7.731,28.284-0.11c41.005-41.326,93.851-64.086,148.803-64.087
			c54.938-0.002,107.784,22.759,148.804,64.089c3.91,3.939,9.052,5.911,14.196,5.911c5.092,0,10.188-1.934,14.09-5.805
			C440.927,257.961,440.975,245.298,433.194,237.458z"/>
        <path d="M353.151,320.292c-26.02-25.779-63.317-41.792-97.339-41.792c-0.004,0-0.011,0-0.015,0h-1.441c-0.006,0-0.009,0-0.015,0
			c-34.023,0-71.323,16.014-97.342,41.792c-7.846,7.774-7.905,20.437-0.131,28.284c3.911,3.947,9.059,5.924,14.208,5.924
			c5.087,0,10.176-1.929,14.075-5.792c18.523-18.352,45.68-30.208,69.192-30.208c0.003,0,0.007,0,0.01,0h1.447
			c0.004,0,0.005,0,0.009,0c23.509,0,50.668,11.857,69.189,30.208c7.846,7.773,20.511,7.717,28.284-0.132
			C361.057,340.73,360.998,328.066,353.151,320.292z"/>
    </Icon >
);

export default Wifi;