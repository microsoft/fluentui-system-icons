import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2H4.75A2.75 2.75 0 002 4.75V7h2.27A2 2 0 017 4.27V2zM2 8v3.25A2.75 2.75 0 004.75 14H7V8.7l-1.65 1.65a.5.5 0 01-.7-.7L6.29 8H2zm7.02 6H8V8.7l1.65 1.65a.5.5 0 00.7-.7L8.71 8H18v2.26A5.5 5.5 0 009.02 14zM18 7h-7.27A2 2 0 008 4.27V2h7.25A2.75 2.75 0 0118 4.75V7zM8 6v1h1a1 1 0 10-1-1zM7 7H6a1 1 0 111-1v1zm12 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const GiftCardAddFilled = wrapIcon(rawSvg({}), 'GiftCardAddFilled');
export default GiftCardAddFilled;
      