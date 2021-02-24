import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Home28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.6 3.5c.81-.66 1.99-.66 2.8 0l7.76 6.21c.53.43.84 1.08.84 1.76v11.28c0 1.24-1 2.25-2.25 2.25h-2.5C18.01 25 17 24 17 22.75v-6.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v6.5C11 23.99 10 25 8.75 25h-2.5C5.01 25 4 24 4 22.75V11.47c0-.68.31-1.33.84-1.76L12.6 3.5z" fill={primaryFill} /></svg>;
};

export default Home28Filled;