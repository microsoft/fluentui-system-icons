import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3H9a2 2 0 10-4 0H2a.5.5 0 000 1h.55l.76 6.78a2.5 2.5 0 002.29 2.21 5.5 5.5 0 015.73-7.93L11.45 4H12a.5.5 0 000-1zM6 3a1 1 0 012 0H6zm9 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM9.6 7.9a.5.5 0 00-.7 0L7.15 9.65a.5.5 0 000 .7L8.9 12.1a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75H8.71l.9-.9a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const DeleteArrowBack16Filled = wrapIcon(rawSvg({}), 'DeleteArrowBack16Filled');
export default DeleteArrowBack16Filled;
      