import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75A2.75 2.75 0 015.75 3h8.5A2.75 2.75 0 0117 5.75V9.6a5.46 5.46 0 00-1.5-.5V5.74c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h3.34c.1.53.27 1.03.51 1.5H5.75A2.75 2.75 0 013 14.25v-8.5z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const TabAddFilled = wrapIcon(rawSvg({}), 'TabAddFilled');
export default TabAddFilled;
      