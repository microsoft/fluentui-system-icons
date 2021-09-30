import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.63 6.17l14.76 8.6A5.25 5.25 0 0142 19.3v15.45C42 37.1 40.1 39 37.75 39h-27.5A4.25 4.25 0 016 34.75V19.3c0-1.87 1-3.6 2.6-4.54l14.77-8.59c.39-.23.87-.23 1.26 0zM39.5 20.23l-14.87 8.6c-.35.2-.76.22-1.12.07l-.14-.07-14.87-8.6v14.52c0 .97.78 1.75 1.75 1.75h27.5c.97 0 1.75-.78 1.75-1.75V20.23zM24 8.7L9.87 16.92c-.33.2-.6.45-.83.74L24 26.3l14.96-8.65c-.22-.3-.5-.55-.83-.74L24 8.7z" fill={primaryFill} /></svg>;
}

const MailRead48Regular = wrapIcon(rawSvg({}), 'MailRead48Regular');
export default MailRead48Regular;
      