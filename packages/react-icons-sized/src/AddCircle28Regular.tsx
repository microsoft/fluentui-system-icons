import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zm0 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zM14 8c.41 0 .75.34.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const AddCircle28Regular = wrapIcon(rawSvg({}), 'AddCircle28Regular');
export default AddCircle28Regular;
      