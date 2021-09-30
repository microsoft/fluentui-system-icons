import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h1v3.5C6 7.33 6.67 8 7.5 8h4c.83 0 1.5-.67 1.5-1.5V3h.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0117 6.62V15a2 2 0 01-2 2v-5.5c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5V17a2 2 0 01-2-2V5z" fill={primaryFill} /><path d="M12 3H7v3.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V3z" fill={primaryFill} /><path d="M14 11.5V17H6v-5.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5z" fill={primaryFill} /></svg>;
}

const Save20Filled = wrapIcon(rawSvg({}), 'Save20Filled');
export default Save20Filled;
      