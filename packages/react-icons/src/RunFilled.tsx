import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.31 2.04a.5.5 0 01.35-.01l6 2a.5.5 0 01.07.92h-.03a6.13 6.13 0 00-.37.22c-.25.15-.58.36-.91.62a5.8 5.8 0 00-.94.87c-.22.27-.38.53-.45.78l1.86 3.72 2 1.33A2.5 2.5 0 0118 14.57v1.93a.5.5 0 01-.48.5l-.02-.5.02.5h-.04a6.42 6.42 0 01-.47 0 21.98 21.98 0 01-5.65-.84c-3.32-.95-7.23-3.02-9.31-7.45a.5.5 0 010-.43A12.43 12.43 0 015.2 4.59a16.2 16.2 0 014.12-2.55zM17 15.47c-7.41-.6-11.41-4.2-13.55-7.58-.15.2-.28.41-.39.62 1.94 3.92 5.46 5.8 8.58 6.7A20.97 20.97 0 0017 16v-.54zM5.96 5.25l1.9 1.9a.5.5 0 01.13.42l-.48 3.4c.7.56 1.5 1.08 2.4 1.55l1.48-1.6-2.33-4.18a.5.5 0 01.6-.71l2.52.84c.13-.31.32-.6.53-.84a6.78 6.78 0 011.6-1.4l-4.8-1.6c-1.1.47-2.38 1.27-3.55 2.22zm7.8 8.7c1 .24 2.07.41 3.24.51a1.5 1.5 0 00-.67-1.14l-1.65-1.1-.92 1.73z" fill={primaryFill} /></svg>;
}

const RunFilled = wrapIcon(rawSvg({}), 'RunFilled');
export default RunFilled;
      