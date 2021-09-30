import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 10a.5.5 0 01.5.4v5.1a.5.5 0 01-.99.09v-5.1c0-.27.22-.5.5-.5zm-3 2a.5.5 0 01.5.41v3.09a.5.5 0 01-1 .09v-3.1c0-.27.22-.5.5-.5zm6-4a.5.5 0 01.5.4v7.1a.5.5 0 01-1 .09v-7.1c0-.27.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const CellularData3Regular = wrapIcon(rawSvg({}), 'CellularData3Regular');
export default CellularData3Regular;
      