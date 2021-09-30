import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.25C3 4.01 4 3 5.25 3h9.5C15.99 3 17 4 17 5.25v9.5c0 1.24-1 2.25-2.25 2.25h-9.5C4.01 17 3 16 3 14.75v-9.5zm2.25-.75a.75.75 0 00-.75.75v9.5c0 .41.34.75.75.75h9.5c.41 0 .75-.34.75-.75v-9.5a.75.75 0 00-.75-.75h-9.5z" fill={primaryFill} /></svg>;
}

const MaximizeFilled = wrapIcon(rawSvg({}), 'MaximizeFilled');
export default MaximizeFilled;
      