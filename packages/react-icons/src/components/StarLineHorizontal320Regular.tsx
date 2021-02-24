import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarLineHorizontal320Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.1 2.9a1 1 0 011.8 0L12.92 7h4.58a.5.5 0 110 1h-4.58a1 1 0 01-.9-.56L10 3.34 8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 4.1-2.16a.5.5 0 01.46.89l-4.09 2.15a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z" fill={primaryFill} /><path d="M12 10.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M12.5 13a.5.5 0 100 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
};

export default StarLineHorizontal320Regular;