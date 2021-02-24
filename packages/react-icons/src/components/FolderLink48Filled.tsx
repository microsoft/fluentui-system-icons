import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderLink48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.45 28.5h2.8a1.25 1.25 0 01.13 2.5h-3.13a4.75 4.75 0 10.25 9.5h2.75a1.25 1.25 0 01.13 2.5h-3.13A7.25 7.25 0 0118 35.99v-.24a7.25 7.25 0 017.01-7.25h.44zm11.05 0h.25A7.25 7.25 0 0144 35.51V36a7.25 7.25 0 01-7 7l-.25.01h-3.13a1.25 1.25 0 010-2.5h3.13a4.75 4.75 0 00.22-9.5h-3.35a1.25 1.25 0 010-2.5h2.88zm3.75-16c2 0 3.64 1.57 3.74 3.55l.01.2v13.76a9.23 9.23 0 00-6.94-3.5l-.31-.01h-11.5A9.25 9.25 0 0016.59 39H7.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2V19H18.03c.97-.07 1.89-.5 2.55-1.23l.14-.17 4.11-5.1h15.42zm-3.5 22a1.25 1.25 0 01.13 2.5H25.25a1.25 1.25 0 01-.13-2.5h11.63zM17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.44 2.14-3.2 3.96-.09.1c-.2.2-.46.33-.74.36l-.14.01H4v-3.75c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31z" fill={primaryFill} /></svg>;
};

export default FolderLink48Filled;