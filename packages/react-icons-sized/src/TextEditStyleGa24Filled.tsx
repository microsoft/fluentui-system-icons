import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 2.5c.41 0 .75.34.75.75V6.5H13A.75.75 0 0113 8h-1.5v3.03l-1.5 1.5V3.25c0-.41.34-.75.75-.75zm-.43 11.12l1.18-1.18 4-4A3.22 3.22 0 0120.07 13l-7.11 7.1c-.27.27-.61.47-.98.57l-4.61 1.3a.75.75 0 01-.92-.94l1.38-4.54c.11-.35.3-.67.56-.93l1.94-1.94zM2 4.25c0-.41.34-.75.75-.75h5c.39 0 .71.3.75.68.2 2.14-1.14 5.97-5.53 7.29a.75.75 0 11-.44-1.44A6 6 0 007 5H2.75A.75.75 0 012 4.25z" fill={primaryFill} /></svg>;
}

const TextEditStyleGa24Filled = wrapIcon(rawSvg({}), 'TextEditStyleGa24Filled');
export default TextEditStyleGa24Filled;
      