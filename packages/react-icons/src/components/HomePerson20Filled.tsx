import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HomePerson20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 2.39a1.5 1.5 0 00-2 0L3.5 7.33c-.32.28-.5.69-.5 1.12v7.05c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-4c0-.28.22-.5.5-.5H12a3 3 0 015-2.24v-.31c0-.43-.18-.84-.5-1.12L11 2.39zm4 6.6a2 2 0 100 4 2 2 0 000-4zm-4 6.26c0-.7.56-1.25 1.25-1.25h5.5c.69 0 1.25.56 1.25 1.25v.09a3.7 3.7 0 01-.01.31l-.06.35a3 3 0 01-.46 1.03c-.55.78-1.59 1.47-3.47 1.47-1.89 0-2.93-.69-3.47-1.47a3 3 0 01-.53-1.48v-.3z" fill={primaryFill} /></svg>;
};

export default HomePerson20Filled;