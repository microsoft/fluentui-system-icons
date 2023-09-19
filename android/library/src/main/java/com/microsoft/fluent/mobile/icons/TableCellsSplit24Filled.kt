package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableCellsSplit24: ImageVector
  get() {
    if (_tableCellsSplit24 != null) {
      return _tableCellsSplit24!!
    }
    _tableCellsSplit24 = fluentIcon(name = "Filled.TableCellsSplit24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          close()
          moveTo(21.0F, 7.0F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(12.5F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(21.0F)
          close()
          moveToRelative(-8.5F, 14.0F)
          horizontalLineToRelative(5.25F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(-8.5F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(3.0F, 8.5F)
          verticalLineToRelative(7.0F)
          horizontalLineToRelative(18.0F)
          verticalLineToRelative(-7.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(9.5F, 1.5F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(1.5F)
          close()
          moveTo(3.0F, 17.75F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          close()        
      }
    }
    return _tableCellsSplit24!!
  }

private var _tableCellsSplit24: ImageVector? = null
