import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.78.72a.75.75 0 00-1.06 1.06L9.94 3H9.5a7.5 7.5 0 107.5 7.5.75.75 0 00-1.5 0 6 6 0 11-6.06-6l-.72.72a.75.75 0 001.06 1.06l2.25-2.25c.3-.3.3-.77 0-1.06L9.78.72z" fill={primaryFill} /><path d="M13.52 6.96c.3.29.3.76.02 1.06l-3.85 4a.75.75 0 01-1.08 0l-1.65-1.71a.75.75 0 111.08-1.04l1.11 1.15 3.31-3.44c.29-.3.76-.3 1.06-.02z" fill={primaryFill} /></svg>;
}

const ApprovalsApp20Filled = wrapIcon(rawSvg({}), 'ApprovalsApp20Filled');
export default ApprovalsApp20Filled;
      