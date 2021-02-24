import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HeadsetVr24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6c2.89 0 5.78.36 8.67 1.08.73.18 1.26.8 1.32 1.55l.01.15v3.1c0 2.2-1.74 4-3.92 4.11H15.41c-.73 0-1.42-.28-1.93-.78l-.14-.15-.65-.74a.91.91 0 00-1.28-.09l-.1.09-.65.74c-.47.55-1.15.88-1.87.93H6.13A4.13 4.13 0 012 12.09L2 11.87v-3.1c0-.8.55-1.5 1.33-1.7C6.22 6.37 9.1 6 12 6zm4.75 3h-.1a.75.75 0 000 1.5H18.35a.75.75 0 000-1.49h-.1L16.75 9zm-9.5 0h-1.6a.75.75 0 000 1.5H7.35a.75.75 0 000-1.5h-.1zM12 8.5a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
};

export default HeadsetVr24Filled;