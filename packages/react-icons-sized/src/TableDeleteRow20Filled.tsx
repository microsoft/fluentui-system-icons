import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6H8V2h4v4zM3.5 2H7v4H5a2 2 0 01-2-2V2.5c0-.28.22-.5.5-.5zM15 6h-2V2h3.5c.28 0 .5.22.5.5V4a2 2 0 01-2 2zm1.5 12a.5.5 0 00.5-.5V16a2 2 0 00-2-2h-2v4h3.5zM12 18v-4H8v4h4zm-5 0H3.5a.5.5 0 01-.5-.5V16c0-1.1.9-2 2-2h2v4zm10.5-7.5a.5.5 0 000-1h-4.89a5 5 0 01-.48.5l.14.13c.12.12.25.24.35.37h4.88zm-15-1h4.89a5 5 0 00.34.35l.14.14-.14.14c-.12.12-.25.24-.35.37H2.5a.5.5 0 010-1zm9.35 2.35a.5.5 0 000-.7L10.71 10l1.14-1.15a.5.5 0 00-.7-.7L10 9.29 8.85 8.15a.5.5 0 10-.7.7L9.29 10l-1.14 1.15a.5.5 0 00.7.7L10 10.71l1.15 1.14c.2.2.5.2.7 0z" fill={primaryFill} /></svg>;
}

const TableDeleteRow20Filled = wrapIcon(rawSvg({}), 'TableDeleteRow20Filled');
export default TableDeleteRow20Filled;
      