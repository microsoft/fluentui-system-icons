import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier18X28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 7.75c-1.82 0-3.75 1.17-3.75 3.13 0 .81.34 1.5.87 2.01A3.83 3.83 0 0010.75 16c0 2.32 2.07 4 4.38 4 2.3 0 4.37-1.68 4.37-4 0-1.23-.59-2.29-1.48-3 .59-.53.98-1.25.98-2.13 0-1.95-1.93-3.12-3.75-3.12zm-1.75 3.13c0-.4.53-1.13 1.75-1.13s1.75.73 1.75 1.13c0 .4-.53 1.12-1.75 1.12s-1.75-.73-1.75-1.13zM15.13 14c1.42 0 2.37 1 2.37 2s-.95 2-2.38 2c-1.42 0-2.37-1-2.37-2s.95-2 2.38-2zm6.58.3a1 1 0 00-1.42 1.4l1.3 1.3-1.3 1.3a1 1 0 001.42 1.4L23 18.42l1.3 1.3a1 1 0 001.4-1.42L24.42 17l1.3-1.3a1 1 0 00-1.42-1.4L23 15.58l-1.3-1.3zM8.75 20a.75.75 0 100-1.5.75.75 0 000 1.5zm-6.6-7.49a1 1 0 01.34-1.37A8.13 8.13 0 005.14 8.5 1 1 0 017 9v10a1 1 0 01-2 0v-7.27c-.43.4-.92.79-1.49 1.13a1 1 0 01-1.37-.35zm3-4.03z" fill={primaryFill} /></svg>;
};

export default Multiplier18X28Filled;