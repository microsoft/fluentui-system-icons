import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 3H3.7l-.1.02-.1.02-.06.03a.72.72 0 00-.22.15l-.04.04-.06.08-.04.07-.04.09-.02.06-.01.07-.01.1v7.52a.75.75 0 001.5.1v-5.8l15.22 15.23c.27.27.68.3.98.08l.08-.08a.75.75 0 00.07-.97l-.07-.09L5.56 4.5h5.7c.37 0 .68-.28.73-.65l.01-.1c0-.38-.28-.7-.65-.74h-.1z" fill={primaryFill} /></svg>;
};

export default ArrowUpLeft24Regular;