import * as React from 'react';
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';
import mailMarkup from '@fluentui/svg-icons/icons/mail_24_regular.svg?raw';

export const Coloring = (): React.ReactElement => {
  const [color, setColor] = React.useState('#d13438');
  const previewStyle: React.CSSProperties = {
    display: 'grid',
    placeItems: 'center',
    width: '64px',
    height: '64px',
    color,
    backgroundColor: '#fff',
  };
  const figureStyle: React.CSSProperties = {
    display: 'grid',
    justifyItems: 'center',
    gap: '8px',
    margin: 0,
  };

  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        Icon color
        <input type="color" value={color} onChange={(event) => setColor(event.target.value)} />
      </label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        <figure style={figureStyle}>
          <div style={previewStyle}>
            <img src={mailUrl} width={24} height={24} alt="Mail (external image)" />
          </div>
          <figcaption>External image</figcaption>
        </figure>
        <figure style={figureStyle}>
          <div style={previewStyle}>
            <span
              role="img"
              aria-label="Mail (CSS mask)"
              style={{
                display: 'inline-block',
                width: '24px',
                height: '24px',
                backgroundColor: 'currentColor',
                maskImage: `url("${mailUrl}")`,
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskImage: `url("${mailUrl}")`,
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'contain',
                forcedColorAdjust: 'preserve-parent-color',
              }}
            />
          </div>
          <figcaption>CSS mask</figcaption>
        </figure>
        <figure style={figureStyle}>
          <div style={previewStyle}>
            <span
              role="img"
              aria-label="Mail (inline SVG)"
              style={{ display: 'inline-flex', width: '24px', height: '24px', fill: 'currentColor' }}
              dangerouslySetInnerHTML={{ __html: mailMarkup }}
            />
          </div>
          <figcaption>Inline SVG</figcaption>
        </figure>
      </div>
    </div>
  );
};
Coloring.storyName = 'Monochrome coloring';
Coloring.parameters = {
  docs: {
    description: {
      story:
        'All three previews receive the selected CSS `color`. Only the CSS mask (`background-color: currentColor`) and inline SVG (`fill: currentColor`) follow it. The external `<img>` keeps its original black fill because page styles cannot reach inside its SVG document. This comparison uses monochrome artwork and trusted package markup, not color variants.',
    },
  },
};
