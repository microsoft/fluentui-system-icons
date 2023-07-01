package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CenterHorizontal20: ImageVector
  get() {
    if (_centerHorizontal20 != null) {
      return _centerHorizontal20!!
    }
    _centerHorizontal20 = fluentIcon(name = "Regular.CenterHorizontal20", 20f) {
      materialPath {
          moveTo(3.5F, 18.0F)
          curveTo(3.224F, 18.0F, 3.0F, 17.776F, 3.0F, 17.5F)
          verticalLineToRelative(-15.0F)
          curveTo(3.0F, 2.224F, 3.224F, 2.0F, 3.5F, 2.0F)
          reflectiveCurveTo(4.0F, 2.224F, 4.0F, 2.5F)
          verticalLineToRelative(15.0F)
          curveTo(4.0F, 17.776F, 3.776F, 18.0F, 3.5F, 18.0F)
          close()
          moveTo(16.0F, 17.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-15.0F)
          curveTo(17.0F, 2.224F, 16.776F, 2.0F, 16.5F, 2.0F)
          reflectiveCurveTo(16.0F, 2.224F, 16.0F, 2.5F)
          verticalLineToRelative(15.0F)
          close()
          moveTo(9.0F, 4.0F)
          curveTo(7.895F, 4.0F, 7.0F, 4.895F, 7.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(9.0F)
          close()
          moveTo(8.0F, 6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.0F)
          close()        
      }
    }
    return _centerHorizontal20!!
  }

private var _centerHorizontal20: ImageVector? = null
