import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2a.5.5 0 00-.45.28l-2 4a.5.5 0 00.06.54l6.5 8a.5.5 0 00.78 0l6.5-8a.5.5 0 00.06-.54l-2-4A.5.5 0 0012.5 2h-9zM2.3 6l1.5-3h2.06l-.75 3h-2.8zm.25 1h2.58l1.62 5.16L2.55 7zm3.63 0h3.64L8 12.82 6.18 7zm4.69 0h2.58l-4.2 5.16L10.87 7zm2.82-1h-2.8l-.75-3h2.05l1.5 3zM9.86 6H6.14l.75-3h2.22l.75 3z" fill={primaryFill} /></svg>;
}

const Premium16Regular = wrapIcon(rawSvg({}), 'Premium16Regular');
export default Premium16Regular;
      