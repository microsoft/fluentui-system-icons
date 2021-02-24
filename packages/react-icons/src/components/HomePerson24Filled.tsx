import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HomePerson24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.55 2.53c.84-.7 2.06-.7 2.9 0l6.75 5.7c.5.42.8 1.05.8 1.72v2.82A2.99 2.99 0 0016 15c0 .77.29 1.47.76 2h-.51c-.7 0-1.34.32-1.75.83v-3.08a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v5c0 .97-.78 1.75-1.75 1.75h-3c-.97 0-1.75-.78-1.75-1.75v-9.8c0-.67.3-1.3.8-1.72l6.75-5.7zM17 15a2 2 0 114 0 2 2 0 01-4 0zm-.75 3c-.69 0-1.25.56-1.25 1.25a24.12 24.12 0 000 .4c.02.1.03.21.07.35.06.29.2.66.46 1.04.54.78 1.58 1.46 3.47 1.46 1.89 0 2.93-.68 3.47-1.46a2.99 2.99 0 00.53-1.49v-.21-.09c0-.69-.56-1.25-1.25-1.25h-5.5z" fill={primaryFill} /></svg>;
};

export default HomePerson24Filled;