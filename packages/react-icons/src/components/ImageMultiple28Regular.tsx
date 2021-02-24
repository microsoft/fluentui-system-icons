import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageMultiple28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6c.9.58 1.5 1.6 1.5 2.75v10.5c0 2.9-2.35 5.25-5.25 5.25H8.75c-1.15 0-2.17-.6-2.74-1.5h13.24A3.75 3.75 0 0023 19.25v-13-.24zm-4.25-3C20.55 3 22 4.46 22 6.25v12.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 18.75V6.25C3 4.45 4.46 3 6.25 3h12.5zm.58 17.4l-6.3-6.18a.75.75 0 00-.97-.07l-.09.07-6.3 6.18c.18.07.38.1.58.1h12.5c.2 0 .4-.03.58-.1l-6.3-6.18 6.3 6.18zm-.58-15.9H6.25c-.97 0-1.75.78-1.75 1.75v12.5c0 .2.04.4.1.6l6.33-6.2a2.25 2.25 0 013.02-.12l.12.12 6.33 6.2c.06-.2.1-.4.1-.6V6.25c0-.97-.78-1.75-1.75-1.75zM16 7.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
};

export default ImageMultiple28Regular;