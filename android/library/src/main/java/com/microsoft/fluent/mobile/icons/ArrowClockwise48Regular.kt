package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowClockwise48: ImageVector
  get() {
    if (_arrowClockwise48 != null) {
      return _arrowClockwise48!!
    }
    _arrowClockwise48 = fluentIcon(name = "Regular.ArrowClockwise48", 48f) {
      materialPath {
          moveTo(24.0F, 39.5F)
          curveToRelative(8.56F, 0.0F, 15.5F, -6.94F, 15.5F, -15.5F)
          curveToRelative(0.0F, -0.551F, -0.029F, -1.095F, -0.085F, -1.631F)
          curveTo(39.341F, 21.655F, 39.877F, 21.0F, 40.595F, 21.0F)
          curveToRelative(0.667F, 0.0F, 1.243F, 0.482F, 1.31F, 1.146F)
          curveTo(41.969F, 22.756F, 42.0F, 23.374F, 42.0F, 24.0F)
          curveToRelative(0.0F, 9.941F, -8.059F, 18.0F, -18.0F, 18.0F)
          reflectiveCurveTo(6.0F, 33.941F, 6.0F, 24.0F)
          reflectiveCurveTo(14.059F, 6.0F, 24.0F, 6.0F)
          curveToRelative(4.856F, 0.0F, 9.262F, 1.923F, 12.5F, 5.048F)
          verticalLineTo(8.25F)
          curveTo(36.5F, 7.56F, 37.06F, 7.0F, 37.75F, 7.0F)
          reflectiveCurveTo(39.0F, 7.56F, 39.0F, 8.25F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-6.5F)
          curveTo(30.56F, 16.0F, 30.0F, 15.44F, 30.0F, 14.75F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(4.152F)
          curveToRelative(-2.833F, -3.074F, -6.892F, -5.0F, -11.402F, -5.0F)
          curveToRelative(-8.56F, 0.0F, -15.5F, 6.94F, -15.5F, 15.5F)
          curveToRelative(0.0F, 8.56F, 6.94F, 15.5F, 15.5F, 15.5F)
          close()        
      }
    }
    return _arrowClockwise48!!
  }

private var _arrowClockwise48: ImageVector? = null
