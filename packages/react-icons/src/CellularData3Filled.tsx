import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 01-1.5.1v-2.6c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 01-1.5.11V8.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const CellularData3Filled = wrapIcon(rawSvg({}), 'CellularData3Filled');
export default CellularData3Filled;
      