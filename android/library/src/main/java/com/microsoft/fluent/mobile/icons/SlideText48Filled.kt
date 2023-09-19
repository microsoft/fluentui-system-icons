package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideText48: ImageVector
  get() {
    if (_slideText48 != null) {
      return _slideText48!!
    }
    _slideText48 = fluentIcon(name = "Filled.SlideText48", 48f) {
      materialPath {
          moveTo(4.0F, 12.75F)
          curveTo(4.0F, 10.127F, 6.127F, 8.0F, 8.75F, 8.0F)
          horizontalLineToRelative(30.5F)
          curveTo(41.873F, 8.0F, 44.0F, 10.127F, 44.0F, 12.75F)
          verticalLineToRelative(22.5F)
          curveToRelative(0.0F, 2.623F, -2.127F, 4.75F, -4.75F, 4.75F)
          horizontalLineTo(8.75F)
          curveTo(6.127F, 40.0F, 4.0F, 37.873F, 4.0F, 35.25F)
          verticalLineToRelative(-22.5F)
          close()
          moveToRelative(9.25F, 9.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(12.56F, 25.0F, 13.25F, 25.0F)
          horizontalLineToRelative(17.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-17.5F)
          close()
          moveTo(12.0F, 30.25F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(27.44F, 29.0F, 26.75F, 29.0F)
          horizontalLineToRelative(-13.5F)
          curveTo(12.56F, 29.0F, 12.0F, 29.56F, 12.0F, 30.25F)
          close()
          moveTo(13.25F, 16.0F)
          curveTo(12.56F, 16.0F, 12.0F, 16.56F, 12.0F, 17.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(23.44F, 16.0F, 22.75F, 16.0F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _slideText48!!
  }

private var _slideText48: ImageVector? = null
