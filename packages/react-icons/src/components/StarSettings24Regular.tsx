import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarSettings24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-.9.88a6.46 6.46 0 00-1.52-.61l1.15-1.13-5.05-.74a1.35 1.35 0 01-1.01-.74L12 4.04 9.74 8.6c-.2.4-.58.68-1.02.74l-5.05.74 3.66 3.56c.32.3.46.76.39 1.2l-.87 5.02L11 17.7c.02.54.1 1.07.24 1.57l-3.96 2.08a1.35 1.35 0 01-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78z" fill={primaryFill} /><path d="M12.5 15.63l.45.43a2 2 0 010 2.88l-.45.43c.2.57.5 1.1.85 1.57l.6-.18a2 2 0 012.52 1.45l.17.72a5.17 5.17 0 001.72 0l.17-.72a2 2 0 012.51-1.45l.6.18c.37-.47.66-1 .86-1.57l-.45-.43a2 2 0 010-2.88l.45-.43c-.2-.58-.5-1.1-.85-1.57l-.6.18a2 2 0 01-2.52-1.45l-.17-.72a5.18 5.18 0 00-1.72 0l-.17.72a2 2 0 01-2.52 1.45l-.6-.18c-.36.47-.65 1-.85 1.57zm5 3.37c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
};

export default StarSettings24Regular;