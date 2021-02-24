import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListSquareWarning16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h8a2 2 0 012 2v6.13l-1.27-2.15a2.03 2.03 0 00-3.07-.48H7a.5.5 0 000 1h1.96l-1.18 2H7a.5.5 0 000 1h.2l-.93 1.57c-.17.28-.26.6-.27.93H4a2 2 0 01-2-2V4zm2.75 1.75a.75.75 0 100-1.5.75.75 0 000 1.5zM5.5 8A.75.75 0 104 8a.75.75 0 001.5 0zm0 3A.75.75 0 104 11a.75.75 0 001.5 0zm1-6c0 .28.23.5.5.5h4.48a.5.5 0 100-1H7a.5.5 0 00-.5.5z" fill={primaryFill} /><path d="M10.73 8.03c.26-.06.53-.03.77.1.16.09.28.2.37.36l3 5.09c.14.22.16.48.1.71a.96.96 0 01-.47.58c-.15.09-.32.13-.5.13H8c-.28 0-.53-.11-.71-.28a.93.93 0 01-.16-1.14l3-5.1a.99.99 0 01.6-.45zm.77 1.47a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm-.5 5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
};

export default TextBulletListSquareWarning16Filled;