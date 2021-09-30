import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 4h.52a3.74 3.74 0 01.2 7.5h-.71a.75.75 0 01-.12-1.49h.1l.53-.01c1.23 0 2.23-1 2.23-2.25 0-1.2-.92-2.17-2.08-2.24l-.15-.01h-.52a.75.75 0 01-.1-1.5h.62-.52zm-4 0h.5a.75.75 0 01.1 1.5h-.6A2.25 2.25 0 005.6 10h.65a.75.75 0 01.1 1.5h-.6a3.75 3.75 0 01-.2-7.5h.7-.5zm0 3h4.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6-4.5z" fill={primaryFill} /></svg>;
}

const Link16Filled = wrapIcon(rawSvg({}), 'Link16Filled');
export default Link16Filled;
      