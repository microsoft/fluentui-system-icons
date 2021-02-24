import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallMissed16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.2 4.15l.22.97a2 2 0 001.63 1.54l.7.12a1.9 1.9 0 002.16-1.46c.32-1.36-.18-2.9-1.6-3.5a11.51 11.51 0 00-8.59 0c-1.43.6-1.94 2.14-1.62 3.51a1.9 1.9 0 002.16 1.45l.7-.12A2 2 0 006.6 5.12l.21-.97A5.47 5.47 0 018 4a5.14 5.14 0 011.2.15zm2.73-1.4c.85.35 1.25 1.32 1.01 2.35a.9.9 0 01-1.03.69l-.7-.12a1 1 0 01-.81-.77l-.28-1.26a.5.5 0 00-.33-.36l-.16.47.16-.47h-.02l-.03-.02a4.4 4.4 0 00-.5-.12 6.14 6.14 0 00-2.97.12l-.03.01h-.01a.5.5 0 00-.34.37L5.61 4.9a1 1 0 01-.81.77l-.7.12a.9.9 0 01-1.03-.69c-.24-1.02.17-2 1.02-2.34a10.51 10.51 0 017.84 0z" fill={primaryFill} /><path d="M8 9.5a.5.5 0 00-1 0v2c0 .28.23.5.5.5H9a.5.5 0 000-1H8V9.5z" fill={primaryFill} /><path d="M4 11a4 4 0 118 0 4 4 0 01-8 0zm4-3a3 3 0 100 6 3 3 0 000-6z" fill={primaryFill} /></svg>;
};

export default CallMissed16Regular;