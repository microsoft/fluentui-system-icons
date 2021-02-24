import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallPark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.53 3.57l.9 2a2.75 2.75 0 01-.64 3.15L8.3 10.1a.25.25 0 00-.08.16c-.04.4.23 1.17.85 2.24.45.78.86 1.33 1.2 1.64.25.21.38.26.44.24l2-.61a2.75 2.75 0 013.04 1.02l1.28 1.77c.8 1.12.66 2.66-.34 3.6l-.88.85a3.75 3.75 0 01-3.6.89c-2.75-.77-5.21-3.1-7.43-6.93-2.21-3.83-2.99-7.14-2.27-9.91a3.75 3.75 0 012.55-2.65l1.16-.35c1.33-.4 2.74.24 3.3 1.5zM6.66 3.5l-1.17.35c-.75.23-1.33.83-1.53 1.6-.6 2.33.09 5.26 2.12 8.78 2.04 3.53 4.23 5.59 6.54 6.23.76.21 1.58.01 2.15-.53l.9-.84c.45-.43.51-1.13.14-1.64l-1.28-1.77a1.25 1.25 0 00-1.38-.47l-2.01.62c-1.17.35-2.23-.6-3.37-2.57C7 11.93 6.64 10.9 6.73 10.1c.05-.42.24-.8.55-1.09l1.5-1.39c.38-.37.5-.94.28-1.43l-.9-2c-.26-.58-.9-.87-1.5-.69zM14.75 2h2.5C19.64 2 21 3.14 21 5.25c0 2.04-1.28 3.17-3.52 3.24H15.5v2.77a.75.75 0 01-1.5.1V2.75c0-.38.28-.7.65-.74l.1-.01h2.5-2.5zm2.5 1.5H15.5V7h1.75c1.61 0 2.25-.53 2.25-1.75 0-1.17-.59-1.7-2.06-1.75h-.2z" fill={primaryFill} /></svg>;
};

export default CallPark24Regular;