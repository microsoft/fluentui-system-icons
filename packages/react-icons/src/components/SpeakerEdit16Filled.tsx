import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerEdit16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.7 2.04c.18.08.3.26.3.46v6.88l-1.66 1.65c-.35.36-.63.77-.82 1.23l-1.3-1.28H3.5A1.5 1.5 0 012 9.48V6.49C2 5.66 2.67 5 3.5 5h1.72l2.93-2.85a.5.5 0 01.54-.1zm-.65 9.7c-.36.36-.61.8-.73 1.3l-.3 1.2a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29a1.56 1.56 0 00-1.61-2.58c-.22.08-.42.2-.6.37L12 7.8l-1.12 1.12-2.83 2.83zm5.64-5.73a6.63 6.63 0 00-1.85-2.87l-.02-.02V3.1a.5.5 0 10-.63.78l.01.01a2.3 2.3 0 01.25.24 5.52 5.52 0 011.22 1.97c.33-.1.68-.13 1.02-.1zm-1.9.6a3.82 3.82 0 00-.95-1.48l-.02-.01V5.1a.5.5 0 00-.63.78l.02.02.08.08a2.93 2.93 0 01.67 1.43l.67-.67.15-.14z" fill={primaryFill} /></svg>;
};

export default SpeakerEdit16Filled;