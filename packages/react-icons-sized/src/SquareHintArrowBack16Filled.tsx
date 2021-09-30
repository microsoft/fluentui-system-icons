import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3.75c0-.14.11-.25.25-.25h.5a.75.75 0 000-1.5h-.5C2.78 2 2 2.78 2 3.75v.5a.75.75 0 001.5 0v-.5zM7 2a.75.75 0 000 1.5h2A.75.75 0 009 2H7zm4.75 0a.75.75 0 000 1.5h.5c.14 0 .25.11.25.25v.5a.75.75 0 001.5 0v-.5C14 2.78 13.22 2 12.25 2h-.5zM3.5 7A.75.75 0 002 7v2a.75.75 0 001.5 0V7zm0 4.75a.75.75 0 00-1.5 0v.5c0 .97.78 1.75 1.75 1.75h.5a.75.75 0 000-1.5h-.5a.25.25 0 01-.25-.25v-.5zM15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM9.6 7.9a.5.5 0 00-.7 0L7.15 9.65a.5.5 0 000 .7L8.9 12.1a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75H8.71l.9-.9a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const SquareHintArrowBack16Filled = wrapIcon(rawSvg({}), 'SquareHintArrowBack16Filled');
export default SquareHintArrowBack16Filled;
      