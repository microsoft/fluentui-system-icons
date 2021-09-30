import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 4a.5.5 0 00-.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3c.28 0 .5.22.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3c0-.28.22-.5.5-.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 00-.5-.5h-3zM7 4.5C7 3.67 7.67 3 8.5 3h3c.83 0 1.5.67 1.5 1.5V7h2.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5H13v2.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 017 15.5V13H4.5A1.5 1.5 0 013 11.5v-3C3 7.67 3.67 7 4.5 7H7V4.5z" fill={primaryFill} /></svg>;
}

const Doctor20Regular = wrapIcon(rawSvg({}), 'Doctor20Regular');
export default Doctor20Regular;
      