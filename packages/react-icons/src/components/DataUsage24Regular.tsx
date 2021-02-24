import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataUsage24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zm0 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.7-.56-1.25-1.25-1.25zM7.75 9c.38 0 .7.28.74.65l.01.1v6.5a.75.75 0 01-1.5.1v-6.6c0-.42.34-.75.75-.75zm8.5-2c.38 0 .7.27.74.63l.01.1v8.54c0 .4-.34.73-.75.73a.74.74 0 01-.74-.63l-.01-.1V7.73c0-.4.34-.73.75-.73zm-4.27 5c.37 0 .67.26.73.62v.1l.04 3.54c0 .4-.32.73-.73.74a.73.73 0 01-.73-.62v-.1l-.04-3.55c0-.4.32-.73.73-.73z" fill={primaryFill} /></svg>;
};

export default DataUsage24Regular;