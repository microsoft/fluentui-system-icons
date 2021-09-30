import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.03.03a6.47 6.47 0 00-1.43-.7l.4-.4c.33-.32.51-.76.51-1.23V4.25a.75.75 0 00-.75-.75h-5.47c-.46 0-.9.18-1.23.51l-8.52 8.53c-.67.68-.66 1.78.02 2.46L9 19.45c.64.64 1.64.68 2.33.13.17.49.39.95.65 1.38-1.25.8-2.94.65-4.04-.45L3.5 16.06a3.25 3.25 0 010-4.6l8.5-8.5a3.25 3.25 0 012.3-.96h5.46zM17 5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm.5 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm-2.35-7.85c.2-.2.5-.2.7 0l1.65 1.64 1.65-1.64a.5.5 0 01.7.7l-1.64 1.65 1.64 1.65a.5.5 0 01-.7.7l-1.65-1.64-1.65 1.64a.5.5 0 01-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const TagDismiss24Regular = wrapIcon(rawSvg({}), 'TagDismiss24Regular');
export default TagDismiss24Regular;
      