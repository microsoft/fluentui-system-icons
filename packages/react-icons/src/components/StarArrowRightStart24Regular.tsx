import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarArrowRightStart24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 01-1.96 1.42l-3.95-2.08c.14-.5.22-1.02.24-1.57l4.14 2.18-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74a1.35 1.35 0 01-1.01-.74L12 4.04 9.74 8.6c-.2.4-.58.68-1.02.74l-5.05.74 1.16 1.13c-.53.14-1.04.35-1.51.61l-.91-.88c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78z" fill={primaryFill} /><path d="M12 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM3.5 17a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L8.29 17H3.5z" fill={primaryFill} /></svg>;
};

export default StarArrowRightStart24Regular;