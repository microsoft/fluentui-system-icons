package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowEnter16: ImageVector
  get() {
    if (_arrowEnter16 != null) {
      return _arrowEnter16!!
    }
    _arrowEnter16 = fluentIcon(name = "Regular.ArrowEnter16", 16f) {
      materialPath {
          moveTo(6.5F, 2.0F)
          curveTo(6.224F, 2.0F, 6.0F, 2.224F, 6.0F, 2.5F)
          reflectiveCurveTo(6.224F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(6.224F, 13.0F, 6.0F, 13.224F, 6.0F, 13.5F)
          reflectiveCurveTo(6.224F, 14.0F, 6.5F, 14.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveToRelative(3.354F, 5.646F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(8.293F, 7.5F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 7.5F, 1.0F, 7.724F, 1.0F, 8.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(6.793F)
          lineToRelative(-2.146F, 2.146F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _arrowEnter16!!
  }

private var _arrowEnter16: ImageVector? = null
