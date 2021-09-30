import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h1v3.5C6 7.33 6.67 8 7.5 8h4c.83 0 1.5-.67 1.5-1.5V3h.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0117 6.62V9.6a5.48 5.48 0 00-5.66.4H6.5c-.83 0-1.5.67-1.5 1.5V17a2 2 0 01-2-2V5zm6 9.5c0-1.33.47-2.55 1.26-3.5H6.5a.5.5 0 00-.5.5V17h3.6c-.38-.75-.6-1.6-.6-2.5zM12 3H7v3.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V3zm-2 11.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h.47a1.97 1.97 0 00-.94-.25 2 2 0 00-1.44.59.5.5 0 01-.71-.71 3 3 0 013.62-.48V12c0-.28.22-.5.5-.5zm-.88 5.53a3 3 0 01-2.62-.18V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 010 1h-.47a1.97 1.97 0 00.94.25 2 2 0 001.44-.59.5.5 0 01.71.71 3 3 0 01-1 .66z" fill={primaryFill} /></svg>;
}

const SaveSync20Filled = wrapIcon(rawSvg({}), 'SaveSync20Filled');
export default SaveSync20Filled;
      