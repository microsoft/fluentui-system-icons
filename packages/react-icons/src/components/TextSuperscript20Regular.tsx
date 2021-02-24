import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextSuperscript20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.59 3c-.47 0-.84.42-.84.86a.5.5 0 11-1 0 1.87 1.87 0 013.43-1.04c.35.55.37 1.27-.05 1.98-.21.36-.5.63-.79.86l-.42.3-.06.05-.34.24c-.32.24-.55.47-.67.75h2.1a.5.5 0 110 1H14.3h-.05a.5.5 0 01-.5-.5c0-1.04.6-1.62 1.17-2.05l.36-.26.06-.04.38-.28c.24-.19.43-.37.55-.58.25-.43.19-.73.07-.92a.89.89 0 00-.75-.37z" fill={primaryFill} /><path d="M12.8 4.22c.08.35.29.66.57.86L9.16 10l4.43 5.17a.5.5 0 11-.75.66L8.5 10.77l-4.33 5.06a.5.5 0 01-.76-.66L7.84 10 3.41 4.83a.5.5 0 11.76-.66L8.5 9.23l4.3-5z" fill={primaryFill} /></svg>;
};

export default TextSuperscript20Regular;