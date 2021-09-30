import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.25 5a.25.25 0 00-.25.25v.25a.5.5 0 01-1 0v-.25C2 4.56 2.56 4 3.25 4h.25a.5.5 0 010 1h-.25zM5 4.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm3 0c0-.28.22-.5.5-.5h.25C9.44 4 10 4.56 10 5.25v.25a.5.5 0 01-1 0v-.25A.25.25 0 008.75 5H8.5a.5.5 0 01-.5-.5zm6.85 1.35l-.15.16a3.5 3.5 0 01-.2 6.99.5.5 0 010-1 2.5 2.5 0 00.22-5l.13.15a.5.5 0 01-.7.7l-1-1a.5.5 0 010-.7l1-1a.5.5 0 01.7.7zM3.5 9C2.67 9 2 9.67 2 10.5v4c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 00.5-.5v-1a.5.5 0 00-1 0v1c0 .28.22.5.5.5h-6zM3 7.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z" fill={primaryFill} /></svg>;
}

const Orientation20Filled = wrapIcon(rawSvg({}), 'Orientation20Filled');
export default Orientation20Filled;
      