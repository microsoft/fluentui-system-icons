import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22l18.5 18.5a.75.75 0 01-1.06 1.06l-1.08-1.08c-.55.35-1.2.55-1.89.55H6.25a3.5 3.5 0 01-3.5-3.5V6.25c0-.7.2-1.34.55-1.89L2.22 3.28a.75.75 0 111.06-1.06zM18.14 19.2L4.8 5.86a1.5 1.5 0 00-.05.39v11.5c0 .83.67 1.5 1.5 1.5h11.5c.13 0 .26-.02.39-.05zM12.9 9.72l1.38 1.38a1 1 0 00.18-.14l4.79-4.8v4.09a1 1 0 002 0v-6.5a1 1 0 00-1-1h-6.5a1 1 0 000 2h4.09l-4.8 4.8a1 1 0 00-.14.17zm8.34 8.33l-1.99-1.98v-2.32a1 1 0 112 0v4l-.01.3zM5.94 2.76l2 1.99h2.31a1 1 0 100-2h-4l-.3.01z" fill={primaryFill} /></svg>;
}

const OpenOff24Filled = wrapIcon(rawSvg({}), 'OpenOff24Filled');
export default OpenOff24Filled;
      