import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.17v3a4.17 4.17 0 005.33 4c.16.42.39.8.66 1.14L5.2 13.09a.5.5 0 00.7.71l1.8-1.79A4.5 4.5 0 0015 8.5V5.23C15 4.55 14.45 4 13.77 4H10.5c-.56 0-1.1.1-1.6.3A4.17 4.17 0 005.17 2h-3C1.52 2 1 2.52 1 3.17zm7.4 8.13l2.46-2.45a.5.5 0 00-.71-.7L7.7 10.58A3.5 3.5 0 0110.5 5h3.27c.13 0 .23.1.23.23V8.5a3.5 3.5 0 01-5.6 2.8zM5.18 3c1.24 0 2.32.72 2.84 1.76a4.52 4.52 0 00-1.62 1.92L4.85 5.15a.5.5 0 10-.7.7l1.91 1.92a4.53 4.53 0 000 1.44A3.17 3.17 0 012 6.17v-3c0-.1.07-.17.17-.17h3z" fill={primaryFill} /></svg>;
}

const LeafTwo16Regular = wrapIcon(rawSvg({}), 'LeafTwo16Regular');
export default LeafTwo16Regular;
      