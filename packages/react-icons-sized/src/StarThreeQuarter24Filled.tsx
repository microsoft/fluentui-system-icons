import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.21 3.1L15 6.73l.57 1.15 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 01-1.96 1.42L12 18.86l-4.72 2.48a1.34 1.34 0 01-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78c.25-.5.73-.75 1.2-.75.5 0 .97.25 1.22.75zM15 9.28v9.47l2.14 1.12-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74c-.1-.01-.18-.03-.27-.07z" fill={primaryFill} /></svg>;
}

const StarThreeQuarter24Filled = wrapIcon(rawSvg({}), 'StarThreeQuarter24Filled');
export default StarThreeQuarter24Filled;
      