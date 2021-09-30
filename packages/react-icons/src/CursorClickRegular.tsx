import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5zM3.61 3.61c.2-.2.51-.2.7 0l1.42 1.42a.5.5 0 11-.7.7L3.6 4.32a.5.5 0 010-.7zm7.78 0c.2.2.2.51 0 .7L9.97 5.74a.5.5 0 11-.7-.7l1.41-1.42c.2-.2.51-.2.7 0zM2 7.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm6.64-.2A1 1 0 007 8.07v9.1a1 1 0 001.75.66l2.03-2.32c.28-.32.7-.51 1.13-.51h3.2a1 1 0 00.65-1.77L8.64 7.3zM8 17.17v-9.1L15.12 14H11.9c-.72 0-1.4.31-1.88.85L8 17.17z" fill={primaryFill} /></svg>;
}

const CursorClickRegular = wrapIcon(rawSvg({}), 'CursorClickRegular');
export default CursorClickRegular;
      