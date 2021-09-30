import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 13.14c.18.18.2.45.06.64l-.06.07a.5.5 0 01-.63.06l-.07-.06L9.18 9.9l-2.79 2.8a2 2 0 01-.89.5l-2.87.8a.5.5 0 01-.61-.62l.78-2.88a2 2 0 01.52-.88L6.1 6.8 2.15 2.85a.5.5 0 01-.06-.63l.06-.07a.5.5 0 01.63-.06l.07.06 11 11zM6.82 7.52l-2.8 2.8a1 1 0 00-.25.44l-.56 2.03 2.03-.56a1 1 0 00.45-.26l2.79-2.79-1.66-1.66zm6.42-5.01l.13.12.12.13c.72.86.68 2.14-.12 2.95L10.6 8.47l-.7-.7 1.58-1.59L9.8 4.52 8.23 6.11l-.7-.71 2.76-2.77c.8-.8 2.1-.85 2.95-.12zM11 3.34l-.48.47 1.66 1.67.48-.48A1.18 1.18 0 1011 3.34z" fill={primaryFill} /></svg>;
}

const EditOff16Regular = wrapIcon(rawSvg({}), 'EditOff16Regular');
export default EditOff16Regular;
      