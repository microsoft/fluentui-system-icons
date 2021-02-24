import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkbox124Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 2A2.75 2.75 0 0120 4.75v8.77c-.3.04-.6.16-.84.36l-.66.53V4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h11.78c.52.52 1.31.64 1.97.33v.87c-.38.2-.8.3-1.25.3H4.75A2.75 2.75 0 012 17.25V4.75A2.75 2.75 0 014.75 2h12.5zm2.53 12.66a.75.75 0 011.22.59v6a.75.75 0 01-1.5 0v-4.44l-1.28 1.03a.75.75 0 01-.94-1.18l2.5-2zM9 13.44l6.47-6.47a.75.75 0 011.13.98l-.07.08-7 7a.75.75 0 01-.98.07l-.08-.07-3-3a.75.75 0 01.98-1.13l.08.07L9 13.44z" fill={primaryFill} /></svg>;
};

export default Checkbox124Regular;