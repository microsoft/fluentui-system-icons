import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6c.38 0 .7.28.74.64l.01.1v12.7l2.22-2.22a.75.75 0 01.98-.07l.08.07c.27.27.3.69.07.98l-.07.08-3.5 3.5a.75.75 0 01-.98.07l-.08-.07-3.5-3.5a.75.75 0 01.98-1.13l.08.07 2.22 2.22V6.74c0-.4.34-.74.75-.74zm0-4a5 5 0 011.75 9.68v-1.66a3.5 3.5 0 10-3.5 0v1.66A5 5 0 0112 2z" fill={primaryFill} /></svg>;
}

const SwipeDown24Regular = wrapIcon(rawSvg({}), 'SwipeDown24Regular');
export default SwipeDown24Regular;
      