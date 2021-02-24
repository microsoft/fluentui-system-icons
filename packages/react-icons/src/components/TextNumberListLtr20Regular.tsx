import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextNumberListLtr20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1.5a.5.5 0 00-.39-.49.5.5 0 00-.56.27l-.07.12a2.96 2.96 0 01-1.2 1.15.5.5 0 10.44.9c.3-.15.56-.34.78-.53V5.5a.5.5 0 001 0v-4z" fill={primaryFill} /><path d="M2.65 7.65a.5.5 0 00.7.7l.05-.04.2-.12C3.76 8.09 4 8 4.3 8c.23 0 .41.06.53.15.1.07.16.17.16.35a.5.5 0 01-.21.44c-.15.12-.35.22-.62.35l-.14.08c-.32.15-.7.36-1 .7-.33.35-.53.81-.53 1.43 0 .28.22.5.5.5h2.5a.5.5 0 000-1H3.59c.04-.1.1-.2.17-.27a2.38 2.38 0 01.83-.53c.27-.13.59-.29.84-.5.33-.27.57-.65.57-1.2 0-.5-.22-.9-.57-1.15A1.92 1.92 0 004.33 7h-.01a2.5 2.5 0 00-1.66.63v.01h-.01zm.01-.02l-.01.02s.1-.1.01-.02z" fill={primaryFill} /><path d="M4.25 15a.5.5 0 000 1c.34 0 .53.1.63.18.1.09.13.2.13.3-.01.2-.19.52-.76.52-.41 0-.63-.1-.72-.17a.41.41 0 01-.1-.07.5.5 0 00-.88.46v.01l.02.02a.85.85 0 00.1.15c.07.08.17.17.3.27.28.18.7.33 1.28.33 1.03 0 1.73-.67 1.76-1.48.01-.37-.12-.74-.4-1.02.28-.28.41-.65.4-1.02-.03-.8-.73-1.48-1.76-1.48-.59 0-1 .15-1.28.33a1.4 1.4 0 00-.4.42l-.01.01v.01a.5.5 0 00.87.48.41.41 0 01.1-.08c.1-.07.3-.17.72-.17.57 0 .75.33.76.52 0 .1-.04.21-.13.3-.1.08-.29.18-.63.18zm-.82-.75l.01-.02v.02z" fill={primaryFill} /><path d="M8.5 4a.5.5 0 100 1h8a.5.5 0 000-1h-8z" fill={primaryFill} /><path d="M8.5 9a.5.5 0 100 1h8a.5.5 0 000-1h-8z" fill={primaryFill} /><path d="M8 14.5c0-.28.22-.5.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default TextNumberListLtr20Regular;