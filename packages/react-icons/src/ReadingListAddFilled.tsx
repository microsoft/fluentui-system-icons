import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5.5a1 1 0 011.84-.56.75.75 0 101.24-.83A2.5 2.5 0 104.6 8h10.67a.75.75 0 000-1.5H4.5a1 1 0 01-1-1z" fill={primaryFill} /><path d="M9.75 4a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /><path d="M5.75 9a.75.75 0 000 1.5h4.98A5.48 5.48 0 0114.5 9H5.75z" fill={primaryFill} /><path d="M2.75 11.5h7.14c-.3.46-.53.96-.68 1.5H2.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M5.75 14h3.27a5.57 5.57 0 00.07 1.5H5.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 101 0V15h1.5a.5.5 0 100-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const ReadingListAddFilled = wrapIcon(rawSvg({}), 'ReadingListAddFilled');
export default ReadingListAddFilled;
      