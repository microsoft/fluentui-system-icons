import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideDesign24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 20.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M17 20.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M22 20.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M15.1 18.03l-1.22-3H5.74L3.9 19.6c-.13.33-.36.5-.67.5-.24 0-.41-.06-.53-.18a.73.73 0 01-.2-.47v-.07c0-.1 0-.18.02-.23L9.13 3c.14-.33.39-.5.76-.5.16 0 .3.05.42.15.13.08.23.2.3.35l6.31 15.44a2.49 2.49 0 00-1.8-.4zM9.79 5l-3.45 8.55h6.95L9.78 5z" fill={primaryFill} /></svg>;
};

export default SlideDesign24Regular;