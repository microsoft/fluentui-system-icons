package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableCellsSplit28: ImageVector
  get() {
    if (_tableCellsSplit28 != null) {
      return _tableCellsSplit28!!
    }
    _tableCellsSplit28 = fluentIcon(name = "Filled.TableCellsSplit28", 28f) {
      materialPath {
          moveTo(14.5F, 7.5F)
          horizontalLineTo(25.0F)
          verticalLineTo(6.75F)
          curveTo(25.0F, 4.679F, 23.321F, 3.0F, 21.25F, 3.0F)
          horizontalLineTo(14.5F)
          verticalLineToRelative(4.5F)
          close()
          moveTo(13.0F, 3.0F)
          horizontalLineTo(6.75F)
          curveTo(4.679F, 3.0F, 3.0F, 4.679F, 3.0F, 6.75F)
          verticalLineTo(7.5F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(1.5F, 22.0F)
          horizontalLineToRelative(6.75F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(20.5F)
          horizontalLineTo(14.5F)
          verticalLineTo(25.0F)
          close()
          moveTo(13.0F, 20.5F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(0.75F)
          curveTo(3.0F, 23.321F, 4.679F, 25.0F, 6.75F, 25.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-4.5F)
          close()
          moveTo(3.0F, 9.0F)
          horizontalLineToRelative(22.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(9.0F)
          close()
          moveToRelative(10.0F, 1.0F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(1.5F)
          verticalLineToRelative(-8.0F)
          horizontalLineTo(13.0F)
          close()        
      }
    }
    return _tableCellsSplit28!!
  }

private var _tableCellsSplit28: ImageVector? = null
