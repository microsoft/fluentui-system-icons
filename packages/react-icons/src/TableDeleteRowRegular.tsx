import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 2c.28 0 .5.22.5.5V4a2 2 0 01-2 2H5a2 2 0 01-2-2V2.5a.5.5 0 011 0V4a1 1 0 001 1h2V2.5a.5.5 0 011 0V5h4V2.5a.5.5 0 011 0V5h2a1 1 0 001-1V2.5c0-.28.22-.5.5-.5zm0 16a.5.5 0 00.5-.5V16a2 2 0 00-2-2H5a2 2 0 00-2 2v1.5a.5.5 0 001 0V16a1 1 0 011-1h2v2.5a.5.5 0 001 0V15h4v2.5a.5.5 0 001 0V15h2a1 1 0 011 1v1.5c0 .28.22.5.5.5zm1-7.5a.5.5 0 000-1h-4.89a5 5 0 01-.48.5l.14.13c.12.12.25.24.35.37h4.88zm-15-1h4.89a5 5 0 00.34.35l.14.14-.14.14c-.12.12-.25.24-.35.37H2.5a.5.5 0 010-1zm9.35 2.35a.5.5 0 000-.7L10.71 10l1.14-1.15a.5.5 0 00-.7-.7L10 9.29 8.85 8.15a.5.5 0 10-.7.7L9.29 10l-1.14 1.15a.5.5 0 00.7.7L10 10.71l1.15 1.14c.2.2.5.2.7 0z" fill={primaryFill} /></svg>;
}

const TableDeleteRowRegular = wrapIcon(rawSvg({}), 'TableDeleteRowRegular');
export default TableDeleteRowRegular;
      