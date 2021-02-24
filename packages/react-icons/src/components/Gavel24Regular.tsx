import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Gavel24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.14 2.98a2.25 2.25 0 00-3.41-.27L7.26 6.18c-1 1-.83 2.67.35 3.46l2 1.34-6.87 6.74a2.5 2.5 0 103.53 3.57l6.88-6.88 1.21 1.91a2.25 2.25 0 003.5.39l3.43-3.44c.98-.98.85-2.6-.27-3.4l-3.89-2.84a.75.75 0 01-.16-.16l-2.83-3.9zm-2.35.8a.75.75 0 011.14.08l.46.63-4.32 4.32-.63-.42a.75.75 0 01-.12-1.15l3.47-3.47zm-1.45 5.88l3.94-3.94 1.47 2.03c.14.19.31.36.5.5l1.96 1.42-3.85 3.85-1.06-1.66a2.25 2.25 0 00-.65-.66l-2.3-1.54zm4.84 5.16l4.26-4.26.7.51c.37.28.41.81.09 1.14l-3.44 3.44a.75.75 0 01-1.16-.13l-.45-.7zm-2.86-1.7l-7.1 7.1a1 1 0 11-1.43-1.43l7.1-6.96.93.62c.09.06.16.13.22.22l.28.45z" fill={primaryFill} /><path d="M14.75 19a.75.75 0 100 1.5h-2a.75.75 0 100 1.5h8.5a.75.75 0 000-1.5h-2a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /></svg>;
};

export default Gavel24Regular;