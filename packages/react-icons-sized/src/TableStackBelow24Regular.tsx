import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 15.5a.75.75 0 01-.75-.75v-8.5C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v8.5c0 .41-.34.75-.75.75H3.75zM10 14h4v-4h-4v4zm0-5.5h4v-4h-4v4zm5.5 5.5h4v-4h-4v4zm0-5.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4zm-7-4H6.25c-.97 0-1.75.78-1.75 1.75V8.5h4v-4zm-4 9.5h4v-4h-4v4z" fill={primaryFill} /><path d="M3.75 19.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /></svg>;
}

const TableStackBelow24Regular = wrapIcon(rawSvg({}), 'TableStackBelow24Regular');
export default TableStackBelow24Regular;
      