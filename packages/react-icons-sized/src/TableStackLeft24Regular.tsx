import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75z" fill={primaryFill} /><path d="M8.5 3.75c0-.41.34-.75.75-.75h8.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25h-8.5a.75.75 0 01-.75-.75V3.75zM10 10v4h4v-4h-4zm0 5.5v4h4v-4h-4zm5.5 0v4h2.25c.97 0 1.75-.78 1.75-1.75V15.5h-4zm0-5.5v4h4v-4h-4zm4-1.5V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4h4zm-9.5-4v4h4v-4h-4z" fill={primaryFill} /></svg>;
}

const TableStackLeft24Regular = wrapIcon(rawSvg({}), 'TableStackLeft24Regular');
export default TableStackLeft24Regular;
      