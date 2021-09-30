import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5v9A2.5 2.5 0 005.5 17h4.59a1.5 1.5 0 01.35-1.56l1-1a1.5 1.5 0 012.47.56h.59a.5.5 0 00.5-.5v-.59a1.5 1.5 0 01-.56-2.47l1-1a1.5 1.5 0 011.56-.35V5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5zM6 5h1a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1zm3 1a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1h-4a1 1 0 01-1-1V6zM7 9a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 011-1h1zm9.85 2.15a.5.5 0 00-.7 0l-1 1a.5.5 0 00.7.7l.15-.14v1.79c0 .83-.67 1.5-1.5 1.5h-1.8l.15-.15a.5.5 0 00-.7-.7l-1 1a.5.5 0 000 .7l1 1a.5.5 0 00.7-.7l-.14-.15h1.79a2.5 2.5 0 002.5-2.5v-1.8l.15.15a.5.5 0 00.7-.7l-1-1z" fill={primaryFill} /></svg>;
}

const PivotFilled = wrapIcon(rawSvg({}), 'PivotFilled');
export default PivotFilled;
      