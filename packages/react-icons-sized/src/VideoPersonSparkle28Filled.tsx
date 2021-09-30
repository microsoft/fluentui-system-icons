import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.23 8.78A2.25 2.25 0 002 8.61V8.6c-.2-.16-.42-.28-.66-.37L.28 7.88a.42.42 0 01-.28-.4.42.42 0 01.28-.4l1.07-.34a2.19 2.19 0 00.8-.48 2.21 2.21 0 00.58-.89v-.03l.35-1.07a.42.42 0 01.4-.28c.08 0 .17.03.24.08.05.04.1.1.12.16l.02.02.02.03.34 1.07.14.3a2.2 2.2 0 001.26 1.1l1.08.35h.02a.42.42 0 01.28.4c0 .09-.03.17-.08.24a.43.43 0 01-.2.16l-1.07.35a2.19 2.19 0 00-1.4 1.4L3.9 10.7v.03a.43.43 0 01-.15.18.42.42 0 01-.48 0 .42.42 0 01-.16-.2l-.35-1.07a2.22 2.22 0 00-.53-.87zM5 4h17.98A3 3 0 0126 7v14a3 3 0 01-3 3H5.01a3 3 0 01-3-3V10.58l.15.45a1.44 1.44 0 001.35.97v9a1.5 1.5 0 001.5 1.5h3.24v-4a2 2 0 012-2h7.5a2 2 0 012 2v4h3.24a1.5 1.5 0 001.5-1.5V7A1.5 1.5 0 0023 5.5H5.47a1.2 1.2 0 01-.3-.46l-.33-1.02.08-.01L5 4zm12.49 7.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-11.83.77l.6-.2a1.27 1.27 0 00.67-.53c.05-.08.1-.17.12-.26l.2-.6a.24.24 0 01.14-.15.25.25 0 01.27.06l.05.08.2.61a1.26 1.26 0 00.79.8l.61.2h.01l.05.02.07.07a.24.24 0 010 .28.24.24 0 01-.12.09l-.6.2c-.2.06-.36.16-.5.3-.14.14-.24.3-.3.49l-.2.61a.24.24 0 01-.23.16.24.24 0 01-.23-.16l-.2-.61a1.27 1.27 0 00-.3-.5c-.14-.14-.3-.24-.5-.3l-.6-.2a.24.24 0 010-.45z" fill={primaryFill} /></svg>;
}

const VideoPersonSparkle28Filled = wrapIcon(rawSvg({}), 'VideoPersonSparkle28Filled');
export default VideoPersonSparkle28Filled;
      