package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Games48: ImageVector
  get() {
    if (_games48 != null) {
      return _games48!!
    }
    _games48 = fluentIcon(name = "Filled.Games48", 48f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          curveToRelative(-7.732F, 0.0F, -14.0F, 6.268F, -14.0F, 14.0F)
          reflectiveCurveToRelative(6.268F, 14.0F, 14.0F, 14.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(7.732F, 0.0F, 14.0F, -6.268F, 14.0F, -14.0F)
          reflectiveCurveToRelative(-6.268F, -14.0F, -14.0F, -14.0F)
          horizontalLineTo(18.0F)
          close()
          moveToRelative(-1.75F, 8.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineTo(23.0F)
          horizontalLineToRelative(3.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(17.5F)
          verticalLineToRelative(3.25F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(15.0F, 29.44F, 15.0F, 28.75F)
          verticalLineTo(25.5F)
          horizontalLineToRelative(-3.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          reflectiveCurveTo(10.56F, 23.0F, 11.25F, 23.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(-3.75F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          close()
          moveTo(32.0F, 27.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(27.0F, 28.88F, 27.0F, 27.5F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          close()
          moveToRelative(1.5F, -4.5F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveToRelative(-1.12F, 2.5F, -2.5F, 2.5F)
          close()        
      }
    }
    return _games48!!
  }

private var _games48: ImageVector? = null
