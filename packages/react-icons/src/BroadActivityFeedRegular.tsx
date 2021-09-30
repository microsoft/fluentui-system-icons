import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 8.5v-4zM3.5 4a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-13zM2 13.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 012 15.5v-2zm1.5-.5a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-4zm9-1c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4zm-.5 1.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
}

const BroadActivityFeedRegular = wrapIcon(rawSvg({}), 'BroadActivityFeedRegular');
export default BroadActivityFeedRegular;
      