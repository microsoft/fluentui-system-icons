import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4C2.67 4 2 4.67 2 5.5v2C2 8.33 2.67 9 3.5 9h2C6.33 9 7 8.33 7 7.5v-2C7 4.67 6.33 4 5.5 4h-2zM3 5.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zM9.5 5a.5.5 0 000 1h8a.5.5 0 000-1h-8zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6zm-6 4c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2zM3 12.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm6.5-.5a.5.5 0 000 1h8a.5.5 0 000-1h-8zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6z" fill={primaryFill} /></svg>;
}

const AppsListDetailRegular = wrapIcon(rawSvg({}), 'AppsListDetailRegular');
export default AppsListDetailRegular;
      