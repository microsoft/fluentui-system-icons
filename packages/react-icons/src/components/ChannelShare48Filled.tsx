import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelShare48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.47 6A6.48 6.48 0 006 12.47v12.05C6 28.1 8.9 31 12.47 31h11.74a5.5 5.5 0 10-.12-2.5H12.47a3.98 3.98 0 01-3.97-3.98V12.48c0-2.2 1.78-3.98 3.97-3.98h12.05c2.2 0 3.98 1.78 3.98 3.97v.28a1.25 1.25 0 102.5 0v-.28C31 8.9 28.1 6 24.52 6H12.48zM17 35.75v-.5a1.25 1.25 0 112.5 0v.5a3.75 3.75 0 003.75 3.75h12.5a3.75 3.75 0 003.75-3.75v-12.5a3.75 3.75 0 00-3.75-3.75H23.91a5.5 5.5 0 11-.12-2.5h11.96C39.2 17 42 19.8 42 23.25v12.5C42 39.2 39.2 42 35.75 42h-12.5A6.25 6.25 0 0117 35.75z" fill={primaryFill} /></svg>;
};

export default ChannelShare48Filled;