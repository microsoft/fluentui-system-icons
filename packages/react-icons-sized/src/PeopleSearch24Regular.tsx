import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.9 14h7.85C21 14 22 15 22 16.25v.9c0 1.1-.47 2.14-1.3 2.85-1.57 1.34-3.81 2-6.7 2h-.18c.23-.47.24-1.02.03-1.5H14c2.56 0 4.46-.56 5.72-1.64.5-.43.78-1.05.78-1.7v-.91a.75.75 0 00-.75-.75h-7.77a5.56 5.56 0 00-.07-1.5zm-5.4-3.5a4.5 4.5 0 013.46 7.38l2.82 2.81a.75.75 0 01-.97 1.13l-.09-.07-2.9-2.9A4.5 4.5 0 116.5 10.5zm0 1.5a3 3 0 100 6 3 3 0 000-6zM14 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /></svg>;
}

const PeopleSearch24Regular = wrapIcon(rawSvg({}), 'PeopleSearch24Regular');
export default PeopleSearch24Regular;
      