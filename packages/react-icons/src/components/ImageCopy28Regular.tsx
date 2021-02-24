import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageCopy28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6C3.6 6.59 3 7.6 3 8.76v10.5c0 2.9 2.35 5.25 5.25 5.25h10.5c1.15 0 2.17-.6 2.74-1.5H8.25a3.75 3.75 0 01-3.75-3.75v-13-.24zm4.25-3A3.25 3.25 0 005.5 6.25v12.5c0 1.8 1.46 3.25 3.25 3.25h12.5c1.8 0 3.25-1.46 3.25-3.25V6.25c0-1.8-1.46-3.25-3.25-3.25H8.75zm-.58 17.4l6.3-6.18a.75.75 0 01.97-.07l.09.07 6.3 6.18c-.18.07-.38.1-.58.1H8.75c-.2 0-.4-.03-.58-.1zm.58-15.9h12.5c.97 0 1.75.78 1.75 1.75v12.5c0 .2-.04.4-.1.6l-6.33-6.2a2.25 2.25 0 00-3.02-.12l-.12.12-6.33 6.2c-.06-.2-.1-.4-.1-.6V6.25c0-.97.78-1.75 1.75-1.75zm2.75 3.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
};

export default ImageCopy28Regular;