package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableCellsSplit20: ImageVector
  get() {
    if (_tableCellsSplit20 != null) {
      return _tableCellsSplit20!!
    }
    _tableCellsSplit20 = fluentIcon(name = "Regular.TableCellsSplit20", 20f) {
      materialPath {
          moveTo(10.0F, 8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(1.0F)
          close()
          moveToRelative(7.0F, -2.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(-13.0F, 9.0F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(5.5F)
          lineToRelative(-0.144F, -0.007F)
          curveTo(4.595F, 15.92F, 4.0F, 15.28F, 4.0F, 14.5F)
          close()
          moveTo(9.0F, 4.0F)
          lineTo(8.993F, 6.0F)
          horizontalLineToRelative(-5.0F)
          lineTo(4.0F, 5.5F)
          lineToRelative(0.007F, -0.144F)
          curveTo(4.08F, 4.595F, 4.72F, 4.0F, 5.5F, 4.0F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(0.993F, 2.0F)
          lineTo(10.0F, 4.0F)
          horizontalLineToRelative(4.5F)
          lineToRelative(0.145F, 0.007F)
          curveTo(15.405F, 4.08F, 16.0F, 4.72F, 16.0F, 5.5F)
          lineTo(15.993F, 6.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveTo(16.0F, 13.0F)
          horizontalLineTo(4.0F)
          lineTo(3.993F, 7.0F)
          horizontalLineToRelative(12.0F)
          lineTo(16.0F, 13.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          lineToRelative(-0.007F, 0.145F)
          curveTo(15.92F, 15.405F, 15.28F, 16.0F, 14.5F, 16.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(0.5F)
          close()        
      }
    }
    return _tableCellsSplit20!!
  }

private var _tableCellsSplit20: ImageVector? = null
