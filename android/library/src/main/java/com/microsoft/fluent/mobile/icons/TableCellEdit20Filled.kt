package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableCellEdit20: ImageVector
  get() {
    if (_tableCellEdit20 != null) {
      return _tableCellEdit20!!
    }
    _tableCellEdit20 = fluentIcon(name = "Filled.TableCellEdit20", 20f) {
      materialPath {
          moveTo(8.0F, 13.0F)
          horizontalLineToRelative(1.985F)
          curveToRelative(0.088F, -0.117F, 0.184F, -0.227F, 0.288F, -0.331F)
          lineTo(12.0F, 10.942F)
          verticalLineTo(7.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(6.0F)
          close()
          moveToRelative(7.102F, -5.16F)
          curveToRelative(0.256F, -0.256F, 0.55F, -0.454F, 0.861F, -0.593F)
          curveTo(15.678F, 7.09F, 15.35F, 7.0F, 15.0F, 7.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(2.942F)
          lineToRelative(2.102F, -2.102F)
          close()
          moveTo(5.0F, 13.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(10.809F, -4.453F)
          lineToRelative(-4.83F, 4.829F)
          curveToRelative(-0.28F, 0.281F, -0.48F, 0.634F, -0.577F, 1.02F)
          lineToRelative(-0.375F, 1.498F)
          curveToRelative(-0.162F, 0.652F, 0.428F, 1.242F, 1.079F, 1.079F)
          lineToRelative(1.498F, -0.375F)
          curveToRelative(0.386F, -0.096F, 0.739F, -0.296F, 1.02F, -0.578F)
          lineToRelative(4.83F, -4.829F)
          curveToRelative(0.73F, -0.73F, 0.73F, -1.914F, 0.0F, -2.644F)
          curveToRelative(-0.731F, -0.73F, -1.915F, -0.73F, -2.646F, 0.0F)
          close()        
      }
    }
    return _tableCellEdit20!!
  }

private var _tableCellEdit20: ImageVector? = null
