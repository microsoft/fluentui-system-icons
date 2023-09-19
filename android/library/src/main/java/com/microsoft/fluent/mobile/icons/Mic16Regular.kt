package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Mic16: ImageVector
  get() {
    if (_mic16 != null) {
      return _mic16!!
    }
    _mic16 = fluentIcon(name = "Regular.Mic16", 16f) {
      materialPath {
          moveTo(5.5F, 4.5F)
          curveTo(5.5F, 3.12F, 6.62F, 2.0F, 8.0F, 2.0F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(5.5F, 9.38F, 5.5F, 8.0F)
          verticalLineTo(4.5F)
          close()
          moveTo(8.0F, 3.0F)
          curveTo(7.172F, 3.0F, 6.5F, 3.672F, 6.5F, 4.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveTo(9.5F, 8.828F, 9.5F, 8.0F)
          verticalLineTo(4.5F)
          curveTo(9.5F, 3.672F, 8.828F, 3.0F, 8.0F, 3.0F)
          close()
          moveTo(4.0F, 7.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          curveToRelative(0.0F, 2.316F, -1.75F, 4.224F, -4.0F, 4.473F)
          verticalLineTo(13.5F)
          curveTo(8.5F, 13.776F, 8.276F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-1.027F)
          curveToRelative(-2.25F, -0.25F, -4.0F, -2.157F, -4.0F, -4.473F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _mic16!!
  }

private var _mic16: ImageVector? = null
