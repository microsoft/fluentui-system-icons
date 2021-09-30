import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2.5a.5.5 0 00-1 0v4.88c.13.1.24.22.36.34l.14.15.14-.15c.12-.12.23-.24.36-.34V2.5zm-1 15v-4.89c.13-.1.24-.23.36-.35l.14-.14.14.14c.12.12.23.24.36.35v4.89a.5.5 0 01-1 0zM2 3.5c0-.28.22-.5.5-.5H4a2 2 0 012 2v10a2 2 0 01-2 2H2.5a.5.5 0 010-1H4a1 1 0 001-1v-2H2.5a.5.5 0 010-1H5V8H2.5a.5.5 0 010-1H5V5a1 1 0 00-1-1H2.5a.5.5 0 01-.5-.5zm16 0a.5.5 0 00-.5-.5H16a2 2 0 00-2 2v10c0 1.1.9 2 2 2h1.5a.5.5 0 000-1H16a1 1 0 01-1-1v-2h2.5a.5.5 0 000-1H15V8h2.5a.5.5 0 000-1H15V5a1 1 0 011-1h1.5a.5.5 0 00.5-.5zm-6.15 4.65a.5.5 0 00-.7 0L10 9.29 8.85 8.15a.5.5 0 10-.7.7L9.29 10l-1.14 1.15a.5.5 0 00.7.7L10 10.71l1.15 1.14a.5.5 0 00.7-.7L10.71 10l1.14-1.15a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const TableDeleteColumnRegular = wrapIcon(rawSvg({}), 'TableDeleteColumnRegular');
export default TableDeleteColumnRegular;
      