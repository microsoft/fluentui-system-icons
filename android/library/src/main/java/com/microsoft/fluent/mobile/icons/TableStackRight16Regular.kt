package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableStackRight16: ImageVector
  get() {
    if (_tableStackRight16 != null) {
      return _tableStackRight16!!
    }
    _tableStackRight16 = fluentIcon(name = "Regular.TableStackRight16", 16f) {
      materialPath {
          moveTo(14.0F, 2.5F)
          curveTo(14.0F, 2.224F, 13.776F, 2.0F, 13.5F, 2.0F)
          reflectiveCurveTo(13.0F, 2.224F, 13.0F, 2.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-11.0F)
          close()
          moveToRelative(-12.0F, 9.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-11.0F)
          curveTo(10.0F, 2.224F, 9.776F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          close()
          moveTo(9.0F, 3.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(0.0F, 5.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(-6.0F, -1.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(0.0F, -5.0F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(0.0F, 6.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineTo(11.0F)
          close()        
      }
    }
    return _tableStackRight16!!
  }

private var _tableStackRight16: ImageVector? = null
