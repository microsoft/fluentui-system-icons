import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerMute24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.92 3.32c.8-.72 2.08-.15 2.08.93v15.5a1.25 1.25 0 01-2.08.93l-4.5-4a.75.75 0 00-.49-.18H4.25C3.01 16.5 2 15.49 2 14.25v-4.5C2 8.5 3 7.5 4.25 7.5h3.68c.18 0 .36-.07.5-.2l4.49-3.98zm.58 1.49L9.42 8.43c-.4.37-.94.57-1.49.57H4.25a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75h3.68c.55 0 1.08.2 1.5.57l4.07 3.62V4.8z" fill={primaryFill} /><path d="M16.22 9.22c.3-.3.77-.3 1.06 0L19 10.94l1.72-1.72a.75.75 0 111.06 1.06L20.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L19 13.06l-1.72 1.72a.75.75 0 11-1.06-1.06L17.94 12l-1.72-1.72a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
};

export default SpeakerMute24Regular;