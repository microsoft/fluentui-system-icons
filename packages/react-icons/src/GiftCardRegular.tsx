import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v6.5A2.75 2.75 0 0115.25 16H4.75A2.75 2.75 0 012 13.25v-6.5zM3 10v3.25c0 .97.78 1.75 1.75 1.75H7v-4.3l-1.65 1.65a.5.5 0 01-.7-.7L6.29 10H3zm1.27-1A2 2 0 017 6.27V5H4.75C3.78 5 3 5.78 3 6.75V9h1.27zM6 9h1V8a1 1 0 10-1 1zm2-1v1h1a1 1 0 10-1-1zm2.73 1H17V6.75C17 5.78 16.22 5 15.25 5H8v1.27A2 2 0 0110.73 9zm-2.02 1l1.64 1.65a.5.5 0 01-.7.7L8 10.71V15h7.25c.97 0 1.75-.78 1.75-1.75V10H8.7z" fill={primaryFill} /></svg>;
}

const GiftCardRegular = wrapIcon(rawSvg({}), 'GiftCardRegular');
export default GiftCardRegular;
      