import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Teddy24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 3.88a4.12 4.12 0 012.7 7.24c.27.75.43 1.55.43 2.38a7.31 7.31 0 01-3.19 5.91c-.28.2-.57.4-.88.57l-.04.02A9.44 9.44 0 0112 21.13a9.44 9.44 0 01-5.4-1.68l-.04-.04a7.31 7.31 0 01-3.18-5.91c0-.83.15-1.63.42-2.38a4.12 4.12 0 116.34-5.07 9.75 9.75 0 013.72 0 4.12 4.12 0 013.64-2.17zM13.52 16.4c-.1.2-.3.37-.53.5-.28.14-.62.23-.99.23s-.71-.09-.99-.24c-.23-.12-.42-.29-.53-.5a4.39 4.39 0 00-2.53 2.44A8.17 8.17 0 0012 19.88c1.5 0 2.89-.4 4.05-1.05a4.38 4.38 0 00-2.53-2.43zM12 7.13c-4.12 0-7.38 2.9-7.38 6.37a6 6 0 002.29 4.6 5.63 5.63 0 0110.18 0 6 6 0 002.29-4.6c0-3.48-3.26-6.38-7.38-6.38zm-5.5-2a2.87 2.87 0 00-2.13 4.8A8.4 8.4 0 018.88 6.4 2.88 2.88 0 006.5 5.13zm11 0c-.97 0-1.86.48-2.38 1.26a8.4 8.4 0 014.5 3.55 2.87 2.87 0 00-2.12-4.81z" fill={primaryFill} /></svg>;
};

export default Teddy24Regular;