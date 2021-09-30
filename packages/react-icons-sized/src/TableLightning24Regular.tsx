import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V10h-4v1.31c-.53.18-1.04.42-1.5.71V10h-4v4h2.02c-.3.46-.53.97-.7 1.5H10v4h1.31c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 013 17.75V6.25zM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25zM4.5 10v4h4v-4h-4zm11-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4zm-1.5-4h-4v4h4v-4zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4zm18.5 2a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM18.53 14H17.1a.5.5 0 00-.47.32l-1.13 3a.5.5 0 00.47.68h.78l-.77 2.32a.52.52 0 00.92.44l2.63-4.03a.47.47 0 00-.4-.73h-.63l.5-1.32a.5.5 0 00-.47-.68z" fill={primaryFill} /></svg>;
}

const TableLightning24Regular = wrapIcon(rawSvg({}), 'TableLightning24Regular');
export default TableLightning24Regular;
      