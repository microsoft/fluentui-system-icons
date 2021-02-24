import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AppStore24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75zM9.37 15.25l-.51.88a.75.75 0 01-1.34-.67l.04-.09.07-.12h1.74zm3.92-5.23L15.01 13h1.74c.38 0 .7.29.75.65v.1c0 .38-.28.7-.65.75h-.97l.5.87a.75.75 0 01-1.24.84l-.06-.09-2.66-4.6.87-1.5zm-.03-2.92c.33.2.46.6.32.94l-.05.09L10.68 13h1.73l.87 1.5H7.25a.75.75 0 01-.1-1.49h1.8l2.18-3.74-.67-1.15a.75.75 0 01.2-.96l.08-.06c.33-.19.74-.1.97.19l.05.08.24.41.24-.4a.75.75 0 011.02-.28z" fill={primaryFill} /></svg>;
};

export default AppStore24Regular;