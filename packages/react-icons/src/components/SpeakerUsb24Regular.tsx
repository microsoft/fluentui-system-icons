import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerUsb24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.92 3.32c.8-.72 2.08-.15 2.08.93v15.5a1.25 1.25 0 01-2.08.93l-4.5-4a.75.75 0 00-.49-.18H4.25C3.01 16.5 2 15.49 2 14.25v-4.5C2 8.5 3 7.5 4.25 7.5h3.68c.18 0 .36-.07.5-.2l4.49-3.98zm.58 1.49L9.42 8.43c-.4.37-.94.57-1.49.57H4.25a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75h3.68c.55 0 1.08.2 1.5.57l4.07 3.62V4.8z" fill={primaryFill} /><path d="M16.5 8.25c0-.41.33-.75.75-.75h3.5c.42 0 .75.34.75.75v1.8c.3.1.5.38.5.7v5c0 .42-.34.75-.75.75h-.24v2.75a.75.75 0 01-1.5 0V16.5h-.98v2.75a.75.75 0 01-1.5 0V16.5h-.28a.75.75 0 01-.75-.75v-5c0-.32.2-.6.5-.7v-1.8zm4 3.25h-3V15h3v-3.5zM18 9v1h2V9h-2z" fill={primaryFill} /></svg>;
};

export default SpeakerUsb24Regular;