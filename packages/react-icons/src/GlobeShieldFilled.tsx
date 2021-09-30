import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 00-5.09-4.22zm5.5 5.22h-3.76l.1.95a1.63 1.63 0 012.2.09c.42.43 1.08.98 1.85 1.27a7.98 7.98 0 00-.4-2.31zm-4.77 0c.08.57.13 1.16.15 1.78-.47.33-1.03.61-1.63.7-.68.09-1.36.66-1.36 1.52v1H7.16a19.44 19.44 0 010-5h5.68zm-5.52 6H10v.5c0 1.42.45 2.55 1.07 3.4l-.07.08c-.35.37-.7.52-1 .52-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32zm.57 4.22A8.02 8.02 0 012.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52zM2.4 12.5h3.76a20.52 20.52 0 010-5H2.4a8 8 0 000 5zm16.11-1.54a5.69 5.69 0 01-3.06-1.72.62.62 0 00-.88 0 5.7 5.7 0 01-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 00.26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54z" fill={primaryFill} /></svg>;
}

const GlobeShieldFilled = wrapIcon(rawSvg({}), 'GlobeShieldFilled');
export default GlobeShieldFilled;
      