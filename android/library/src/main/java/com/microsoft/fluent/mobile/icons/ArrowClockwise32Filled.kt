package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowClockwise32: ImageVector
  get() {
    if (_arrowClockwise32 != null) {
      return _arrowClockwise32!!
    }
    _arrowClockwise32 = fluentIcon(name = "Filled.ArrowClockwise32", 32f) {
      materialPath {
          moveTo(5.0F, 16.0F)
          curveTo(5.0F, 9.925F, 9.925F, 5.0F, 16.0F, 5.0F)
          curveToRelative(2.923F, 0.0F, 5.58F, 1.14F, 7.55F, 3.0F)
          horizontalLineToRelative(-2.3F)
          curveTo(20.56F, 8.0F, 20.0F, 8.56F, 20.0F, 9.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-4.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveTo(24.5F, 4.06F, 24.5F, 4.75F)
          verticalLineToRelative(0.761F)
          curveTo(22.18F, 3.628F, 19.221F, 2.5F, 16.0F, 2.5F)
          curveTo(8.544F, 2.5F, 2.5F, 8.544F, 2.5F, 16.0F)
          reflectiveCurveTo(8.544F, 29.5F, 16.0F, 29.5F)
          reflectiveCurveTo(29.5F, 23.456F, 29.5F, 16.0F)
          curveToRelative(0.0F, -0.28F, -0.009F, -0.558F, -0.025F, -0.833F)
          curveTo(29.434F, 14.494F, 28.854F, 14.0F, 28.179F, 14.0F)
          curveToRelative(-0.708F, 0.0F, -1.239F, 0.643F, -1.198F, 1.35F)
          curveTo(26.994F, 15.565F, 27.0F, 15.782F, 27.0F, 16.0F)
          curveToRelative(0.0F, 6.075F, -4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveTo(5.0F, 22.075F, 5.0F, 16.0F)
          close()        
      }
    }
    return _arrowClockwise32!!
  }

private var _arrowClockwise32: ImageVector? = null
