import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 2a5 5 0 00-4 2 6 6 0 015.23 3.05c.25-.03.5-.05.77-.05h3V3.34C16 2.6 15.4 2 14.66 2H11z" fill={primaryFill} /><path d="M7.34 14.99L7 15a5 5 0 01-5-5V6.34C2 5.6 2.6 5 3.34 5H7a5 5 0 014.2 2.28 6.02 6.02 0 00-3.43 2.78L6.35 8.65a.5.5 0 10-.7.7l1.68 1.69a6 6 0 000 3.95z" fill={primaryFill} /><path d="M8 13a5 5 0 015-5h3.66C17.4 8 18 8.6 18 9.34V13a5 5 0 01-8.16 3.87l-.99.98a.5.5 0 01-.7-.7l.98-.99A4.98 4.98 0 018 13zm2.55 3.16l3.3-3.3a.5.5 0 00-.7-.71l-3.31 3.3c.2.27.44.5.7.71z" fill={primaryFill} /></svg>;
}

const LeafThreeFilled = wrapIcon(rawSvg({}), 'LeafThreeFilled');
export default LeafThreeFilled;
      