package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlideText48: ImageVector
  get() {
    if (_slideText48 != null) {
      return _slideText48!!
    }
    _slideText48 = fluentIcon(name = "Regular.SlideText48", 48f) {
      materialPath {
          moveTo(12.0F, 17.25F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-9.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          close()
          moveToRelative(1.25F, 5.25F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(12.56F, 25.0F, 13.25F, 25.0F)
          horizontalLineToRelative(17.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-17.5F)
          close()
          moveToRelative(0.0F, 6.5F)
          curveTo(12.56F, 29.0F, 12.0F, 29.56F, 12.0F, 30.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(27.44F, 29.0F, 26.75F, 29.0F)
          horizontalLineToRelative(-13.5F)
          close()
          moveTo(8.75F, 8.0F)
          curveTo(6.127F, 8.0F, 4.0F, 10.127F, 4.0F, 12.75F)
          verticalLineToRelative(22.5F)
          curveTo(4.0F, 37.873F, 6.127F, 40.0F, 8.75F, 40.0F)
          horizontalLineToRelative(30.5F)
          curveToRelative(2.623F, 0.0F, 4.75F, -2.127F, 4.75F, -4.75F)
          verticalLineToRelative(-22.5F)
          curveTo(44.0F, 10.127F, 41.873F, 8.0F, 39.25F, 8.0F)
          horizontalLineTo(8.75F)
          close()
          moveTo(6.5F, 12.75F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(30.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(22.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(8.75F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineToRelative(-22.5F)
          close()        
      }
    }
    return _slideText48!!
  }

private var _slideText48: ImageVector? = null
