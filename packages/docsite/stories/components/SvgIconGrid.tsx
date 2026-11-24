import * as React from 'react';
import { Button, makeStyles, MessageBar, Toaster, tokens } from '@fluentui/react-components';
import { CopyRegular } from '@fluentui/react-icons/svg/copy';
import { FixedSizeGrid, type GridChildComponentProps } from 'react-window';
import { IconCatalogControls } from './IconCatalogControls';
import { useIconCatalogClipboard } from './useIconCatalogClipboard';
import { useIconCatalogGridLayout } from './useIconCatalogGridLayout';
import { parseSvgIconPath, type SvgCatalogIcon } from './svg-icon-catalog';

const ICONS = STORYBOOK_SVG_ICON_PATHS.map(parseSvgIconPath);
const CELL_WIDTH = 280;
const ROW_HEIGHT = 200;
const SIZE_OPTIONS = [
  { value: 'all', label: 'All sizes' },
  ...[...new Set(ICONS.map((icon) => icon.size))]
    .sort((first, second) => first - second)
    .map((size) => ({ value: String(size), label: `${size}px` })),
];
const STYLE_OPTIONS = [
  { value: 'all', label: 'All variants' },
  ...['regular', 'filled', 'light', 'color'].map((style) => ({
    value: style,
    label: style === 'color' ? 'Color (deprecated)' : style[0].toUpperCase() + style.slice(1),
  })),
];
const useClasses = makeStyles({
  pane: { borderRadius: tokens.borderRadiusSmall, boxShadow: tokens.shadow2 },
  cell: {
    boxSizing: 'border-box',
    height: 'calc(100% - 16px)',
    margin: '8px',
    padding: '12px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '80px minmax(0, 1fr)',
    gap: '8px',
    justifyItems: 'center',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusSmall,
    boxShadow: tokens.shadow2,
  },
  copy: { gridArea: '1 / 1', justifySelf: 'end', alignSelf: 'start', zIndex: 1 },
  preview: { gridArea: '1 / 1', alignSelf: 'center', objectFit: 'contain', backgroundColor: '#fff' },
  code: {
    width: '100%',
    minWidth: 0,
    alignSelf: 'start',
    textAlign: 'center',
    whiteSpace: 'normal',
    overflowWrap: 'anywhere',
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
  },
});

type CellData = {
  icons: SvgCatalogIcon[];
  columns: number;
  previewSize: number;
  classes: ReturnType<typeof useClasses>;
  onCopy: (value: string) => void;
};

function renderCell({ columnIndex, rowIndex, style, data }: GridChildComponentProps<CellData>) {
  const icon = data.icons[rowIndex * data.columns + columnIndex];
  if (!icon) return <div style={style} />;

  return (
    <div style={style}>
      <div className={data.classes.cell}>
        <Button
          className={data.classes.copy}
          appearance="transparent"
          aria-label={`Copy ${icon.path} package path`}
          title="Copy SVG package path"
          icon={<CopyRegular />}
          onClick={() => data.onCopy(icon.packagePath)}
        />
        <img
          className={data.classes.preview}
          src={icon.assetUrl}
          alt={icon.path}
          width={data.previewSize}
          height={data.previewSize}
          loading="lazy"
          decoding="async"
        />
        <code className={data.classes.code}>{icon.path}</code>
      </div>
    </div>
  );
}

export function SvgIconGrid() {
  const classes = useClasses();
  const { copyIcon, toasterId } = useIconCatalogClipboard('SVG package path');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [size, setSize] = React.useState('all');
  const [variant, setVariant] = React.useState('all');
  const filtered = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return ICONS.filter(
      (icon) =>
        `${icon.name.replace(/_/g, ' ')} ${icon.packagePath}`.toLowerCase().includes(query) &&
        (size === 'all' || icon.size === Number(size)) &&
        (variant === 'all' || icon.style === variant),
    );
  }, [searchQuery, size, variant]);

  const { areaRef, gridRef, gridProps } = useIconCatalogGridLayout({
    items: filtered,
    cellWidth: CELL_WIDTH,
    rowHeight: ROW_HEIGHT,
  });
  const data: CellData = {
    icons: filtered,
    columns: gridProps.columnCount,
    previewSize: size === 'all' ? 48 : Number(size),
    classes,
    onCopy: (value) => void copyIcon(value),
  };

  return (
    <div ref={areaRef}>
      <Toaster toasterId={toasterId} />
      <IconCatalogControls
        searchPlaceholder="Icon name or SVG path..."
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        size={size}
        sizeOptions={SIZE_OPTIONS}
        onSizeChange={setSize}
        variantFilter={{ value: variant, options: STYLE_OPTIONS, onChange: setVariant }}
        resultCount={filtered.length}
      />
      {filtered.length === 0 ? (
        <MessageBar intent="warning">No SVG files match these filters.</MessageBar>
      ) : (
        <div className={classes.pane}>
          <FixedSizeGrid<CellData> ref={gridRef} itemData={data} {...gridProps}>
            {renderCell}
          </FixedSizeGrid>
        </div>
      )}
    </div>
  );
}
