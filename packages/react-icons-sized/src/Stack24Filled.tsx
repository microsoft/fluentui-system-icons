import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a2 2 0 00-2 2v7c0 1.1.9 2 2 2h11a2 2 0 002-2V6a2 2 0 00-2-2H4zm2.5 13.5A2 2 0 014.56 16H15.5a2.5 2.5 0 002.5-2.5V6.56a2 2 0 011.5 1.94v5a4 4 0 01-4 4h-9zM9 20a2 2 0 01-1.94-1.5h9.19c2.35 0 4.25-1.9 4.25-4.25V9.06A2 2 0 0122 11v3.25A5.75 5.75 0 0116.25 20H9z" fill={primaryFill} /></svg>;
}

const Stack24Filled = wrapIcon(rawSvg({}), 'Stack24Filled');
export default Stack24Filled;
      