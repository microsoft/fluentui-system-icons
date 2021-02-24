import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AddCircle24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 5c-.38 0-.7.28-.74.65l-.01.1v3.5h-3.5a.75.75 0 00-.1 1.5h3.6v3.5a.75.75 0 001.5.1v-3.6h3.5a.75.75 0 00.1-1.5h-3.6v-3.5A.75.75 0 0012 7z" fill={primaryFill} /></svg>;
};

export default AddCircle24Filled;