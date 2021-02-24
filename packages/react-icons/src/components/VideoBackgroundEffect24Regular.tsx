import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoBackgroundEffect24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 16.94v2.12l-.94.94H2.94L6 16.94zm16-2.5v2.12L18.56 20h-.57v-1.56l4.01-4zM8.75 14h6.5c.91 0 1.67.7 1.74 1.6V20h-1.5v-4.25a.25.25 0 00-.19-.24l-.06-.01H8.75a.25.25 0 00-.24.2l-.01.05V20H7v-4.25c0-.92.7-1.67 1.6-1.74l.15-.01zm-.73-3.58c.06.57.24 1.12.52 1.6L2 18.56v-2.12l6.02-6.02zM22 9.93v2.13l-4 4v-.31l-.01-.17a2.73 2.73 0 00-.39-1.25l4.4-4.4zM12.06 4L2 14.06v-2.12L9.94 4h2.12zM22 5.43v2.13l-5.67 5.66a2.73 2.73 0 00-.86-.21l-.23-.01h-.6c.35-.3.64-.66.86-1.06l6.5-6.5zM12 7a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7.56 4L2 9.56V7.44L5.44 4h2.12zm13.5 0L15.9 9.15a3.98 3.98 0 00-.65-1.47L18.93 4h2.13zm-4.5 0L14 6.54a3.97 3.97 0 00-1.6-.52L14.45 4h2.12z" fill={primaryFill} /></svg>;
};

export default VideoBackgroundEffect24Regular;