package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CameraDome24: ImageVector
  get() {
    if (_cameraDome24 != null) {
      return _cameraDome24!!
    }
    _cameraDome24 = fluentIcon(name = "Filled.CameraDome24", 24f) {
      materialPath {
          moveTo(2.0F, 3.75F)
          curveTo(2.0F, 2.784F, 2.784F, 2.0F, 3.75F, 2.0F)
          horizontalLineToRelative(16.5F)
          curveTo(21.216F, 2.0F, 22.0F, 2.784F, 22.0F, 3.75F)
          reflectiveCurveTo(21.216F, 5.5F, 20.25F, 5.5F)
          horizontalLineTo(3.75F)
          curveTo(2.784F, 5.5F, 2.0F, 4.716F, 2.0F, 3.75F)
          close()
          moveTo(12.0F, 17.5F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          reflectiveCurveToRelative(-4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          close()
          moveToRelative(2.5F, -4.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveToRelative(-2.5F, -1.12F, -2.5F, -2.5F)
          reflectiveCurveTo(10.62F, 11.0F, 12.0F, 11.0F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          close()
          moveTo(3.0F, 7.0F)
          horizontalLineToRelative(18.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 4.97F, -4.03F, 9.0F, -9.0F, 9.0F)
          reflectiveCurveToRelative(-9.0F, -4.03F, -9.0F, -9.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(9.0F, 12.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, -2.462F, 5.5F, -5.5F)
          reflectiveCurveTo(15.038F, 8.0F, 12.0F, 8.0F)
          reflectiveCurveToRelative(-5.5F, 2.462F, -5.5F, 5.5F)
          reflectiveCurveTo(8.962F, 19.0F, 12.0F, 19.0F)
          close()        
      }
    }
    return _cameraDome24!!
  }

private var _cameraDome24: ImageVector? = null
