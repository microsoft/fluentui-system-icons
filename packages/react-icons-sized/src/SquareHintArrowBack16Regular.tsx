import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.5c0-.28.22-.5.5-.5h1a.5.5 0 000-1h-1C2.67 2 2 2.67 2 3.5v1a.5.5 0 001 0v-1zM7 2a.5.5 0 000 1h2a.5.5 0 000-1H7zm4.5 0a.5.5 0 000 1h1c.28 0 .5.22.5.5v1a.5.5 0 001 0v-1c0-.83-.67-1.5-1.5-1.5h-1zM3 7a.5.5 0 00-1 0v2a.5.5 0 001 0V7zm0 4.5a.5.5 0 00-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 000-1h-1a.5.5 0 01-.5-.5v-1zm12-1a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM9.6 7.9a.5.5 0 00-.7 0L7.15 9.65a.5.5 0 000 .7L8.9 12.1a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75H8.71l.9-.9a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const SquareHintArrowBack16Regular = wrapIcon(rawSvg({}), 'SquareHintArrowBack16Regular');
export default SquareHintArrowBack16Regular;
      