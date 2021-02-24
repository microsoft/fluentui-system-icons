import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Guest20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 9a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M7.72 12c-.61 0-1.31.41-1.33 1.2-.01.51.1 1.24.66 1.83.56.6 1.5.97 2.95.97 1.45 0 2.39-.37 2.95-.97.57-.6.67-1.32.66-1.83-.02-.79-.72-1.2-1.33-1.2H7.72zm-.33 1.22c0-.05.02-.1.07-.14a.42.42 0 01.26-.08h4.56c.11 0 .2.04.26.08.05.04.07.09.07.14.01.37-.07.8-.38 1.12-.31.33-.94.66-2.23.66s-1.92-.33-2.23-.66c-.31-.33-.39-.75-.38-1.12z" fill={primaryFill} /><path d="M9 2a2 2 0 00-2 2H5.5C4.67 4 4 4.67 4 5.5v11c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5H13a2 2 0 00-2-2H9zm3.73 3h1.77c.28 0 .5.22.5.5v11a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-11c0-.28.22-.5.5-.5h1.77c.34.6.99 1 1.73 1h2a2 2 0 001.73-1zM8 4a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
};

export default Guest20Regular;