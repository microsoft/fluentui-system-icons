package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Dock20: ImageVector
  get() {
    if (_dock20 != null) {
      return _dock20!!
    }
    _dock20 = fluentIcon(name = "Regular.Dock20", 20f) {
      materialPath {
          moveTo(10.354F, 3.147F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(9.5F, 4.707F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(4.707F)
          lineToRelative(2.146F, 2.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-3.0F, -3.0F)
          close()
          moveTo(3.0F, 10.5F)
          curveTo(3.0F, 9.672F, 3.672F, 9.0F, 4.5F, 9.0F)
          horizontalLineToRelative(3.0F)
          curveTo(7.776F, 9.0F, 8.0F, 8.776F, 8.0F, 8.5F)
          reflectiveCurveTo(7.776F, 8.0F, 7.5F, 8.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(3.12F, 8.0F, 2.0F, 9.12F, 2.0F, 10.5F)
          verticalLineToRelative(3.0F)
          curveTo(2.0F, 14.88F, 3.12F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-3.0F)
          curveTo(18.0F, 9.12F, 16.88F, 8.0F, 15.5F, 8.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(12.224F, 8.0F, 12.0F, 8.224F, 12.0F, 8.5F)
          reflectiveCurveTo(12.224F, 9.0F, 12.5F, 9.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.672F, 15.0F, 3.0F, 14.328F, 3.0F, 13.5F)
          verticalLineToRelative(-3.0F)
          close()        
      }
    }
    return _dock20!!
  }

private var _dock20: ImageVector? = null
