import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckboxPerson24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 2A2.75 2.75 0 0120 4.75v7.4a3 3 0 00-1.5-.12V4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h9.45c-.13.3-.2.63-.2.98 0 .18 0 .35.03.52H4.75A2.75 2.75 0 012 17.25V4.75A2.75 2.75 0 014.75 2h12.5zM19 12.98a2 2 0 012 2 2 2 0 11-2-2zm2.5 5c.83 0 1.5.68 1.5 1.5 0 1.12-.46 2.01-1.21 2.62-.74.6-1.74.88-2.79.88a4.43 4.43 0 01-2.79-.88A3.19 3.19 0 0115 19.48a1.5 1.5 0 011.5-1.5h5zM9 13.44l6.47-6.47a.75.75 0 011.13.98l-.07.08-7 7a.75.75 0 01-.98.07l-.08-.07-3-3a.75.75 0 01.98-1.13l.08.07L9 13.44z" fill={primaryFill} /></svg>;
};

export default CheckboxPerson24Regular;