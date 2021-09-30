import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 6h25.5C39.65 6 42 8.35 42 11.25v25.5c0 2.9-2.35 5.25-5.25 5.25h-25.5A5.25 5.25 0 016 36.75v-25.5C6 8.35 8.35 6 11.25 6zM23 8.5H11.25a2.75 2.75 0 00-2.75 2.75v11.5H23V8.5zM8.5 25.25v11.5a2.75 2.75 0 002.75 2.75H23V25.25H8.5zm17 14.25h11.25a2.75 2.75 0 002.75-2.75v-11.5h-14V39.5zm14-16.75v-11.5a2.75 2.75 0 00-2.75-2.75H25.5v14.25h14z" fill={primaryFill} /></svg>;
}

const TableSimple48Regular = wrapIcon(rawSvg({}), 'TableSimple48Regular');
export default TableSimple48Regular;
      