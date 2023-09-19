package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Crop32: ImageVector
  get() {
    if (_crop32 != null) {
      return _crop32!!
    }
    _crop32 = fluentIcon(name = "Filled.Crop32", 32f) {
      materialPath {
          moveTo(9.0F, 3.25F)
          curveTo(9.0F, 2.56F, 8.44F, 2.0F, 7.75F, 2.0F)
          reflectiveCurveTo(6.5F, 2.56F, 6.5F, 3.25F)
          verticalLineTo(6.5F)
          horizontalLineTo(3.25F)
          curveTo(2.56F, 6.5F, 2.0F, 7.06F, 2.0F, 7.75F)
          reflectiveCurveTo(2.56F, 9.0F, 3.25F, 9.0F)
          horizontalLineTo(6.5F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          horizontalLineTo(23.0F)
          verticalLineToRelative(3.25F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(25.5F)
          horizontalLineToRelative(3.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(29.44F, 23.0F, 28.75F, 23.0F)
          horizontalLineTo(11.5F)
          curveTo(10.12F, 23.0F, 9.0F, 21.88F, 9.0F, 20.5F)
          verticalLineTo(3.25F)
          close()
          moveToRelative(14.0F, 8.25F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(2.5F)
          verticalLineToRelative(-10.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          horizontalLineToRelative(-10.0F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          close()        
      }
    }
    return _crop32!!
  }

private var _crop32: ImageVector? = null
