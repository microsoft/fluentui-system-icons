import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.85 1.15a.5.5 0 10-.7.7L10.29 3H9.5a7.5 7.5 0 107.5 7.5.5.5 0 00-1 0A6.5 6.5 0 119.5 4h.8L9.14 5.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2z" fill={primaryFill} /><path d="M13.35 7.14c.2.2.2.5.01.7l-3.85 4a.5.5 0 01-.72 0l-1.65-1.7a.5.5 0 01.72-.7l1.29 1.34 3.49-3.63c.2-.2.5-.2.7-.01z" fill={primaryFill} /></svg>;
}

const ApprovalsApp20Regular = wrapIcon(rawSvg({}), 'ApprovalsApp20Regular');
export default ApprovalsApp20Regular;
      