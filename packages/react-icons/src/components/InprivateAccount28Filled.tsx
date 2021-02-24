import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InprivateAccount28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.83 18A3 3 0 0021 16H7a3 3 0 00-3 3v.71C4 23.43 8.21 26 14 26c3.06 0 5.68-.76 7.47-2H14v-1h8.63c.43-.46.77-.96 1-1.5H14v-1h9.93c.05-.26.07-.52.07-.79V19H14v-1h9.83z" fill={primaryFill} /><path d="M20 8c0-.25-.02-.5-.05-.75H14v-1h5.74a5.97 5.97 0 00-.7-1.5H14v-1h4.24a6 6 0 100 8.5H14v-1h5.04c.3-.46.54-.96.7-1.5H14v-1h5.95c.03-.25.05-.5.05-.75z" fill={primaryFill} /></svg>;
};

export default InprivateAccount28Filled;