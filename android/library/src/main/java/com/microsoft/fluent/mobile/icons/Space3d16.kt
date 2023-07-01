package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Space3d16: ImageVector
  get() {
    if (_space3d16 != null) {
      return _space3d16!!
    }
    _space3d16 = fluentIcon(name = "Filled.Space3d16", 316f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(-0.732F)
          lineToRelative(-1.334F, -2.0F)
          horizontalLineTo(13.0F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(1.066F)
          lineToRelative(-1.334F, 2.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(4.5F)
          close()
          moveToRelative(0.0F, 7.0F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(3.306F)
          lineTo(4.31F, 13.993F)
          curveTo(3.017F, 13.895F, 2.0F, 12.816F, 2.0F, 11.5F)
          close()
          moveTo(6.36F, 11.0F)
          horizontalLineToRelative(3.28F)
          lineToRelative(1.0F, 3.0F)
          horizontalLineTo(5.36F)
          lineToRelative(1.0F, -3.0F)
          close()
          moveToRelative(0.334F, -1.0F)
          horizontalLineToRelative(2.612F)
          lineTo(8.64F, 8.0F)
          horizontalLineTo(7.36F)
          lineToRelative(-0.666F, 2.0F)
          close()
          moveToRelative(4.0F, 1.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 1.316F, -1.017F, 2.395F, -2.309F, 2.493F)
          lineTo(10.694F, 11.0F)
          close()
          moveToRelative(-0.334F, -1.0F)
          horizontalLineToRelative(1.706F)
          lineToRelative(-1.334F, -2.0F)
          horizontalLineTo(9.694F)
          lineToRelative(0.666F, 2.0F)
          close()
          moveToRelative(-6.426F, 0.0F)
          horizontalLineTo(5.64F)
          lineToRelative(0.666F, -2.0F)
          horizontalLineTo(5.268F)
          lineToRelative(-1.334F, 2.0F)
          close()        
      }
    }
    return _space3d16!!
  }

private var _space3d16: ImageVector? = null
