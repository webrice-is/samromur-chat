import * as React from 'react';
import Icon, { IconProps } from './icon';

export const Mic: React.FC<IconProps> = (props) => (
    <Icon viewBox="0 0 350 350" className="mic" {...props} >
        <g>
            <path d="M176.2,278.4L176.2,278.4c19.2,0,36.8-8,49.6-20.8c12.8-12.8,20.8-30.4,20.8-49.6V70.4
		c0-19.2-8-36.8-20.8-49.6S195.4,0,176.2,0l0,0c-19.2,0-36.8,8-49.6,20.8s-20.8,30.4-20.8,49.6V208c0,19.2,8,36.8,20.8,49.6
		C139.4,270.4,157,278.4,176.2,278.4z M126.6,70.4c0-13.6,5.6-26,14.8-35.2s21.6-14.8,35.2-14.8l0,0c13.6,0,26,5.6,35.2,14.8
		s14.8,21.6,14.8,35.2V208c0,13.6-5.6,26-14.8,35.2c-9.2,9.2-21.6,14.8-35.2,14.8l0,0c-13.6,0-26-5.6-35.2-14.8
		c-9.2-9.2-14.8-21.6-14.8-35.2V70.4z"/>
            <path d="M165.8,311.6v17.6H139c-5.6,0-10.4,4.4-10.4,10.4c0,5.6,4.4,10.4,10.4,10.4h36.8l0,0l0,0h36.8
		c5.6,0,10.4-4.4,10.4-10.4c0-5.6-4.4-10.4-10.4-10.4h-26.8v-17.6c24.4-2.4,46.4-12.8,62.4-29.2c18.8-18.8,30-44.4,30-72.8V174
		c0-5.6-4.4-10.4-10.4-10.4c-5.6,0-10.4,4.4-10.4,10.4v35.6c0,22.8-9.2,43.2-24,58.4c-14.8,14.8-35.6,24-58.4,24s-43.2-9.2-58.4-24
		c-14.8-14.8-24-35.6-24-58.4V174c0-5.6-4.4-10.4-10.4-10.4c-5.6,0-10.4,4.4-10.4,10.4v35.6c0,28.4,11.6,54,30,72.8
		C119.8,298.8,141.8,308.8,165.8,311.6z"/>
        </g>
    </Icon >
);

export default Mic;