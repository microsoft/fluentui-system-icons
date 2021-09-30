import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.78 2.22c.3.3.3.77 0 1.06L18.56 6.5l3.22 3.22a.75.75 0 11-1.06 1.06L17.5 7.56l-3.22 3.22a.75.75 0 11-1.06-1.06l3.22-3.22-3.22-3.22a.75.75 0 011.06-1.06l3.22 3.22 3.22-3.22c.3-.3.77-.3 1.06 0zM9.37 3.32l.86 2.02c.37.88.16 1.92-.52 2.57l-1.9 1.8a8.68 8.68 0 003.36 5.77l2.28-.76c.86-.29 1.8.04 2.33.82l1.23 1.8c.62.91.5 2.16-.26 2.93l-.81.82a3.02 3.02 0 01-3.06.77c-2.53-.79-4.87-3.14-7-7.05C3.75 10.9 3 7.57 3.62 4.84a3.26 3.26 0 012.15-2.4l1.08-.35c1-.32 2.09.2 2.52 1.22z" fill={primaryFill} /></svg>;
}

const CallDismiss24Filled = wrapIcon(rawSvg({}), 'CallDismiss24Filled');
export default CallDismiss24Filled;
      