import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PageFit24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 4A3.75 3.75 0 0122 7.75v8.5A3.75 3.75 0 0118.25 20H5.75A3.75 3.75 0 012 16.25v-8.5A3.75 3.75 0 015.75 4h12.5zm0 9c-.38 0-.7.28-.74.65l-.01.1V15a.5.5 0 01-.41.5h-1.34a.75.75 0 00-.1 1.5H17a2 2 0 002-1.85v-1.4a.75.75 0 00-.75-.75zm-12.5 0c-.38 0-.7.28-.74.65l-.01.1V15a2 2 0 001.85 2h1.4a.75.75 0 00.1-1.5H7a.5.5 0 01-.5-.41v-1.34a.75.75 0 00-.75-.75zm2.5-6h-1.4a2 2 0 00-1.84 1.84L5 9v1.35a.75.75 0 001.5 0V8.91a.5.5 0 01.41-.4L7 8.5h1.35a.75.75 0 000-1.5h-.1zM17 7h-1.25a.75.75 0 00-.1 1.5H17a.5.5 0 01.5.41v1.34a.75.75 0 001.5.1V9a2 2 0 00-1.85-2H17z" fill={primaryFill} /></svg>;
};

export default PageFit24Filled;