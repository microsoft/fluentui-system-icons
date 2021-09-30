import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10.73 9A2 2 0 009 8H4a2 2 0 00-2 2v2.5a1 1 0 102 0v4.25a1.25 1.25 0 102.5 0 1.25 1.25 0 102.5 0V12.5a1 1 0 102 0V10a2 2 0 00-.27-1zM14 8a2 2 0 100-4 2 2 0 000 4zm-3 6.23a2 2 0 001-1.73V10a3 3 0 00-.17-1H16a2 2 0 012 2v2a1 1 0 11-2 0v3.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 11-2.5 0v-2.52z" fill={primaryFill} /></svg>;
}

const Guardian20Filled = wrapIcon(rawSvg({}), 'Guardian20Filled');
export default Guardian20Filled;
      