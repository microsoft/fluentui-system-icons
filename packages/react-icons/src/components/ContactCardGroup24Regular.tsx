import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContactCardGroup24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 16.75v-9.5a3.25 3.25 0 013.07-3.24L5.25 4h13.5zm0 1.5H5.11c-.9.08-1.61.83-1.61 1.75v9.5c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75zm-9.5 7c.42 0 .75.34.75.75v.58c0 1.27-.97 1.92-2.5 1.92S5 15.1 5 13.83v-.58c0-.41.34-.75.75-.75h3.5zm1.58 0h1.42c.41 0 .75.34.75.75v.33c0 .97-.77 1.42-1.88 1.42-.11 0-.22 0-.33-.02.11-.26.18-.56.2-.9l.01-.25v-.58c0-.27-.06-.52-.17-.75zm4.42 0h3a.75.75 0 01.1 1.5h-3.1a.75.75 0 01-.1-1.5h3.1-3zm-7.75-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm3.87.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.88.5h3a.75.75 0 01.1 1.5h-3.1a.75.75 0 01-.1-1.5h3.1-3z" fill={primaryFill} /></svg>;
};

export default ContactCardGroup24Regular;