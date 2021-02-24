import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderZip20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.17 3c.27 0 .53.07.76.21l.14.09 1.6 1.2h5.83a2.5 2.5 0 012.48 2.17l.01.17L18 7v7.5a2.5 2.5 0 01-2.34 2.5H4.5A2.5 2.5 0 012 14.66V5.5A2.5 2.5 0 014.34 3h2.83zM14 5.5h-1V8h1V5.5zm-2 0H9.62L8.16 7.03a1.5 1.5 0 01-.94.46l-.15.01H3v7c0 .78.6 1.42 1.36 1.5H13v-.94a.51.51 0 010-.12V14h-.5a.5.5 0 110-1h.5v-2h-.5a.5.5 0 010-1h.5V9h-.5a.5.5 0 01-.5-.5v-3zm2 9h.5a.5.5 0 010 1H14v.5h1.5c.78 0 1.42-.6 1.5-1.36V7c0-.78-.6-1.42-1.36-1.5H15v3a.5.5 0 01-.5.5H14v2.5h.5a.5.5 0 010 1H14v.96a.48.48 0 010 .08v.96zM7.17 4H4.5c-.78 0-1.42.6-1.5 1.36V6.5h4.07a.5.5 0 00.3-.1l.06-.06L8.7 5.02 7.47 4.1a.5.5 0 00-.22-.1h-.08z" fill={primaryFill} /></svg>;
};

export default FolderZip20Regular;