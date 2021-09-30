import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.78 2.09l.07.06 11 11c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L9.18 9.9l-2.79 2.8a2 2 0 01-.89.5l-2.87.8a.5.5 0 01-.61-.62l.78-2.88a2 2 0 01.52-.88L6.1 6.8 2.15 2.85a.5.5 0 01-.06-.63l.06-.07a.5.5 0 01.63-.06zm6.33 1.73l3.07 3.07-1.58 1.58L7.52 5.4l1.59-1.58zm4.13-1.31l.13.12.12.13c.72.86.68 2.14-.12 2.95l-.48.47-3.08-3.07.48-.48c.8-.8 2.1-.85 2.95-.12z" fill={primaryFill} /></svg>;
}

const EditOff16Filled = wrapIcon(rawSvg({}), 'EditOff16Filled');
export default EditOff16Filled;
      