import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Globe32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 30a14 14 0 100-28 14 14 0 000 28zm0-26c1.03 0 2.28.95 3.33 3.23.38.8.7 1.74.96 2.77h-8.58c.26-1.03.58-1.96.96-2.77C13.72 4.95 14.97 4 16 4zm-5.15 2.39c-.49 1.06-.9 2.28-1.2 3.61H5.6a12.04 12.04 0 016.13-5.22c-.33.5-.63 1.04-.9 1.6zM9.28 12a28.3 28.3 0 000 8h-4.6a11.98 11.98 0 010-8h4.6zm.37 10c.3 1.33.71 2.55 1.2 3.61.26.57.56 1.11.89 1.61A12.04 12.04 0 015.6 22h4.04zm2.06 0h8.58a16.07 16.07 0 01-.96 2.77C18.28 27.05 17.03 28 16 28c-1.03 0-2.28-.95-3.33-3.23-.38-.8-.7-1.74-.96-2.77zm8.99-2h-9.4a26.13 26.13 0 010-8h9.4a26.13 26.13 0 010 8zm1.65 2h4.04a12.04 12.04 0 01-6.13 5.22c.33-.5.63-1.04.9-1.6.48-1.07.89-2.29 1.2-3.62zm4.97-2h-4.6a28.3 28.3 0 000-8h4.6a11.98 11.98 0 010 8zM20.26 4.78c2.6.98 4.76 2.84 6.13 5.22h-4.04c-.3-1.33-.71-2.55-1.2-3.61-.26-.57-.56-1.11-.89-1.61z" fill={primaryFill} /></svg>;
};

export default Globe32Regular;