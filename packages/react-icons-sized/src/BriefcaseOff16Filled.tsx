import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.77 13.48l1.38 1.37a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L4.79 5.5H3.5a2 2 0 00-2 2v4c0 1.1.9 2 2 2h9c.1 0 .18 0 .27-.02zm1.73-1.98a2 2 0 01-.14.74L7.62 5.5H10V3H6v.88l-1-1V2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v3h1.5a2 2 0 012 2v4z" fill={primaryFill} /></svg>;
}

const BriefcaseOff16Filled = wrapIcon(rawSvg({}), 'BriefcaseOff16Filled');
export default BriefcaseOff16Filled;
      