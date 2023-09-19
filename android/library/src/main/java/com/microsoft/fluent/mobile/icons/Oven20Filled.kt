package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Oven20: ImageVector
  get() {
    if (_oven20 != null) {
      return _oven20!!
    }
    _oven20 = fluentIcon(name = "Filled.Oven20", 20f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(14.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(1.5F, 2.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(6.0F, 5.914F, 6.0F, 5.5F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(7.5F, 5.086F, 7.5F, 5.5F)
          close()
          moveToRelative(6.5F, 0.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(12.5F, 5.914F, 12.5F, 5.5F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(14.0F, 5.086F, 14.0F, 5.5F)
          close()
          moveToRelative(-4.0F, 0.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(9.586F, 4.75F, 10.0F, 4.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(10.414F, 6.25F, 10.0F, 6.25F)
          close()
          moveTo(3.0F, 14.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(14.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveToRelative(3.5F, -4.0F)
          curveTo(6.224F, 10.0F, 6.0F, 10.224F, 6.0F, 10.5F)
          verticalLineToRelative(3.0F)
          curveTo(6.0F, 13.776F, 6.224F, 14.0F, 6.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _oven20!!
  }

private var _oven20: ImageVector? = null
