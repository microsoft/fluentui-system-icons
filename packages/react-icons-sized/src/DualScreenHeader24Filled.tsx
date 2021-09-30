import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 8v10.25c0 .96-.79 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V8H22zM11.23 8v11.98L11 20H3.75C2.78 20 2 19.2 2 18.25V8h9.24zM11 4c.08 0 .16 0 .24.02V7H2V5.75C2 4.78 2.78 4 3.75 4H11zm9.25 0C21.2 4 22 4.8 22 5.75V7h-9.26V4.02L13 4h7.25z" fill={primaryFill} /></svg>;
}

const DualScreenHeader24Filled = wrapIcon(rawSvg({}), 'DualScreenHeader24Filled');
export default DualScreenHeader24Filled;
      