import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.53 3.57l.9 2a2.75 2.75 0 01-.64 3.15L8.3 10.1a.25.25 0 00-.08.15c-.04.4.23 1.18.85 2.25.45.78.86 1.33 1.2 1.64.25.21.38.26.44.24l2-.61a2.75 2.75 0 013.04 1.02l1.28 1.77c.8 1.12.66 2.66-.34 3.6l-.88.85a3.75 3.75 0 01-3.6.89c-2.75-.77-5.21-3.1-7.43-6.93-2.21-3.83-2.99-7.14-2.27-9.91a3.75 3.75 0 012.34-2.58l.2-.07 1.17-.35c1.33-.4 2.74.24 3.3 1.5zM6.66 3.5l-1.17.35-.16.06c-.67.26-1.19.83-1.37 1.54-.6 2.33.09 5.26 2.12 8.78 2.04 3.52 4.23 5.59 6.54 6.23.76.21 1.58.01 2.15-.53l.9-.84c.45-.43.51-1.13.14-1.64l-1.28-1.78a1.25 1.25 0 00-1.38-.46l-2.01.62c-1.17.35-2.23-.6-3.37-2.57C7 11.93 6.64 10.9 6.73 10.1c.05-.42.24-.8.55-1.09l1.5-1.4c.38-.36.5-.93.28-1.42l-.9-2c-.26-.58-.9-.87-1.5-.69zm15.12-1.28c.3.3.3.77 0 1.06L18.56 6.5l3.22 3.22a.75.75 0 11-1.06 1.06L17.5 7.56l-3.22 3.22a.75.75 0 11-1.06-1.06l3.22-3.22-3.22-3.22a.75.75 0 011.06-1.06l3.22 3.22 3.22-3.22c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const CallDismiss24Regular = wrapIcon(rawSvg({}), 'CallDismiss24Regular');
export default CallDismiss24Regular;
      