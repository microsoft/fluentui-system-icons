import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5.5a1 1 0 00-1 1 1 1 0 101-1z" fill={primaryFill} /><path d="M3.5 4.5c-.1 0-.2 0-.3.02A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5V8.44a2 2 0 001 0v6.06c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9c-.51 0-.97.26-1.24.65a2 2 0 00-.76-.15z" fill={primaryFill} /><path d="M7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M7.5 11a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /></svg>;
}

const ChannelRegular = wrapIcon(rawSvg({}), 'ChannelRegular');
export default ChannelRegular;
      