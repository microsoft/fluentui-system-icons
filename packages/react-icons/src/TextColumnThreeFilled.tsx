import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M17 5.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M7 5.75A.75.75 0 006.25 5h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M12 8.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M17 8.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M7 8.75A.75.75 0 006.25 8h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M12 11.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M17 11.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M7 11.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M12 14.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M17 14.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M7 14.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
}

const TextColumnThreeFilled = wrapIcon(rawSvg({}), 'TextColumnThreeFilled');
export default TextColumnThreeFilled;
      