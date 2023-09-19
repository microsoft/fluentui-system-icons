package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Crop32: ImageVector
  get() {
    if (_crop32 != null) {
      return _crop32!!
    }
    _crop32 = fluentIcon(name = "Regular.Crop32", 32f) {
      materialPath {
          moveTo(9.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveTo(7.0F, 2.448F, 7.0F, 3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 7.0F, 2.0F, 7.448F, 2.0F, 8.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineTo(23.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(11.5F)
          curveTo(10.12F, 23.0F, 9.0F, 21.88F, 9.0F, 20.5F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(14.0F, 8.5F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(-10.0F)
          curveTo(25.0F, 9.015F, 22.985F, 7.0F, 20.5F, 7.0F)
          horizontalLineToRelative(-10.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          close()        
      }
    }
    return _crop32!!
  }

private var _crop32: ImageVector? = null
