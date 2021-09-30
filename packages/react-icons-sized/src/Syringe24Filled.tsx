import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.72 2.22c.3-.3.77-.3 1.07 0l4 4a.75.75 0 01-1.07 1.06l-.47-.47-1.69 1.69 2.47 2.47a.75.75 0 11-1.06 1.06l-1.47-1.47-6.84 6.84c-.7.7-1.66 1.1-2.65 1.1H6.56l-3.28 3.28a.75.75 0 01-1.06-1.06l3.28-3.28v-2.45c0-1 .4-1.95 1.1-2.65l.34-.34 1.53 1.53a.75.75 0 001.06-1.06L8 10.94l.94-.94 1.53 1.53a.75.75 0 101.06-1.06L10 8.94l.94-.94 1.53 1.53a.75.75 0 101.06-1.06L12 6.94l1.44-1.44-1.47-1.47a.75.75 0 011.06-1.06l2.47 2.47 1.7-1.7-.48-.46a.75.75 0 010-1.06zm2.47 3.53l-.94-.94-1.69 1.69.94.94 1.7-1.7z" fill={primaryFill} /></svg>;
}

const Syringe24Filled = wrapIcon(rawSvg({}), 'Syringe24Filled');
export default Syringe24Filled;
      