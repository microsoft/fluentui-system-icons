import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelAdd20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4.5c-.1 0-.2 0-.3.02A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9c-.51 0-.97.26-1.24.65a2 2 0 00-.76-.15z" fill={primaryFill} /><path d="M9.2 16c.1.35.24.68.4 1H5.5A2.5 2.5 0 013 14.5V8.44a2 2 0 001 0v6.06c0 .83.67 1.5 1.5 1.5h3.7z" fill={primaryFill} /><path d="M9.6 12c.18-.36.4-.7.66-1H7.5a.5.5 0 000 1h2.1z" fill={primaryFill} /><path d="M3.5 5.5a1 1 0 00-1 1 1 1 0 101-1z" fill={primaryFill} /><path d="M7.5 8a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
};

export default ChannelAdd20Regular;