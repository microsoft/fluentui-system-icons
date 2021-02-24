import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContactCard24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 4C20.99 4 22 5 22 6.25v11.5C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5zm0 1.5H4.25a.75.75 0 00-.75.75v11.5c0 .42.34.75.75.75h15.5c.41 0 .75-.33.75-.75V6.25a.75.75 0 00-.75-.75zm-10 7c.41 0 .75.34.75.75v.6c-.17 1.11-1.1 1.65-2.5 1.65s-2.33-.54-2.5-1.65v-.6c0-.41.34-.75.75-.75h3.5zm3.5.5h4.5a.75.75 0 01.1 1.49h-4.6a.75.75 0 01-.1-1.49h4.6-4.5zM8 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5.25 1h4.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6-4.5z" fill={primaryFill} /></svg>;
};

export default ContactCard24Regular;