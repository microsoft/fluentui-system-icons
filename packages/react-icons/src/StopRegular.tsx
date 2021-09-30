import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 4c.28 0 .5.22.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11c0-.28.22-.5.5-.5h11zm-11-1C3.67 3 3 3.67 3 4.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-11z" fill={primaryFill} /></svg>;
}

const StopRegular = wrapIcon(rawSvg({}), 'StopRegular');
export default StopRegular;
      