import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 4c.41 0 .75.34.75.75v6.5A3.75 3.75 0 0118.25 15H4.59l3.72 3.72c.26.27.29.68.07.98l-.07.08a.75.75 0 01-.98.07l-.09-.07-5-5a.75.75 0 01-.07-.98l.07-.08 5-5a.75.75 0 011.14.98l-.07.08-3.72 3.72h13.66c1.2 0 2.17-.93 2.24-2.1l.01-.15v-6.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowEnterLeft24Regular = wrapIcon(rawSvg({}), 'ArrowEnterLeft24Regular');
export default ArrowEnterLeft24Regular;
      