import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2H5a3 3 0 00-3 3v3h2.7A2.5 2.5 0 017 4.5c.36 0 .7.07 1 .2V2zM2 9.5V14a3 3 0 003 3h3v-6.44l-1.72 1.72a.75.75 0 01-1.06-1.06L6.94 9.5H2zM9.5 17h1.52A6.5 6.5 0 0122 12.81V9.5H10.56l1.72 1.72a.75.75 0 11-1.06 1.06L9.5 10.56V17zM22 8h-9.2a2.5 2.5 0 00-2.3-3.5c-.36 0-.7.07-1 .2V2H19a3 3 0 013 3v3zM10.5 8h-1V7a1 1 0 111 1zM8 8H7a1 1 0 111-1v1zm15 9.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
}

const GiftCardAdd24Filled = wrapIcon(rawSvg({}), 'GiftCardAdd24Filled');
export default GiftCardAdd24Filled;
      