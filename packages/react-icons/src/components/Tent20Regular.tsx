import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tent20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.4 2.82a.5.5 0 00-.77 0 20.89 20.89 0 01-4.91 3.9.5.5 0 00-.25.36L3.37 15H2.5a.5.5 0 000 1h3.94a.5.5 0 00.1.01h6.9a.5.5 0 00.1-.01h3.96a.5.5 0 000-1h-.84l-1.1-7.92a.5.5 0 00-.24-.36 20.89 20.89 0 01-4.92-3.9zM13.7 15a19.92 19.92 0 01-3.22-7.2.5.5 0 00-.97 0c-.98 3.84-2.14 5.75-3.22 7.2H4.4l1.03-7.54c1.3-.76 3.3-2.2 4.6-3.57a23.15 23.15 0 004.6 3.57L15.64 15h-1.96zm-1.22 0H7.52c.84-1.22 1.7-2.78 2.48-5.25.7 2.23 1.49 3.77 2.48 5.25z" fill={primaryFill} /></svg>;
};

export default Tent20Regular;