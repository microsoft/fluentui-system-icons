import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Lightbulb16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2c-1.23 0-2.35.48-3.17 1.31-.8.81-1.29 1.94-1.33 3.23v.04c.06 1.24.65 2.33 1.74 3.46l.7 2.94V13a1.52 1.52 0 001.42 1h1.41c.31-.03.6-.16.84-.35.23-.2.4-.46.48-.78l.8-3.05A4.72 4.72 0 0012.5 6.4c0-1.22-.5-2.31-1.32-3.1A4.55 4.55 0 008 2zM5.54 4.01A3.55 3.55 0 0110.48 4 3.32 3.32 0 0111.5 6.4c0 .99-.45 1.92-1.4 2.8l-.11.1L9.54 11H6.5l-.34-1.46-.1-.1C5 8.37 4.55 7.48 4.5 6.56A3.76 3.76 0 015.54 4zM6.74 12h2.54l-.16.63v.01a.45.45 0 01-.16.24.5.5 0 01-.26.12H7.36a.52.52 0 01-.3-.1.46.46 0 01-.16-.2l-.17-.7z" fill={primaryFill} /></svg>;
};

export default Lightbulb16Regular;