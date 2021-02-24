import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.93 3H6.06A3.25 3.25 0 003 6.26v11.68A3.25 3.25 0 006.25 21h5.77c-.3-.46-.53-.97-.7-1.5H6.1c-.9-.08-1.61-.83-1.61-1.75V8h15v3.31c.53.18 1.04.42 1.5.71V6.07A3.25 3.25 0 0017.93 3zM6.25 4.5h11.5c.97 0 1.75.78 1.75 1.75v.25h-15v-.25c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /><path d="M11 10.15a.75.75 0 00-.75-.65h-3.6a.75.75 0 00-.65.75v7.1c.06.37.37.65.75.65h3.6a.75.75 0 00.65-.75v-7.1zM7.5 11h2v5.5h-2V11z" fill={primaryFill} /><path d="M17.25 9.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /><path d="M12.95 16.06l-.45-.43c.2-.58.49-1.1.85-1.57l.6.18a2 2 0 002.52-1.45l.17-.72a5.18 5.18 0 011.72 0l.17.72a2 2 0 002.51 1.45l.6-.18c.37.47.66 1 .86 1.57l-.45.43a2 2 0 000 2.88l.45.43c-.2.57-.5 1.1-.85 1.57l-.6-.18a2 2 0 00-2.52 1.45l-.17.72a5.17 5.17 0 01-1.72 0l-.17-.72a2 2 0 00-2.52-1.45l-.6.18c-.36-.47-.65-1-.85-1.57l.45-.43a2 2 0 000-2.88zm6 1.44c0-.83-.65-1.5-1.45-1.5-.8 0-1.45.67-1.45 1.5S16.7 19 17.5 19c.8 0 1.45-.67 1.45-1.5z" fill={primaryFill} /></svg>;
};

export default ContentSettings24Regular;