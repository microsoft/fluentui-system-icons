import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerSettings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 3.44c.2.23.3.51.3.81v7.25a6.5 6.5 0 00-3.76 7.77L7.98 16.5H4.25c-1.24 0-2.25-1-2.25-2.25v-4.5C2 8.51 3 7.5 4.25 7.5h3.73l4.96-4.2a1.25 1.25 0 011.76.14zm-.42 10.54a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 000 1.8l.55.13a2 2 0 011.45 2.52l-.19.63c.44.38.94.7 1.49.92l.49-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.9l-.2-.7a2 2 0 011.44-2.5l.59-.13a5.72 5.72 0 000-1.81l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.39-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.91l.2.69zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
};

export default SpeakerSettings24Filled;