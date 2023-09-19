package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Food16: ImageVector
  get() {
    if (_food16 != null) {
      return _food16!!
    }
    _food16 = fluentIcon(name = "Regular.Food16", 16f) {
      materialPath {
          moveTo(3.5F, 1.0F)
          curveTo(3.776F, 1.0F, 4.0F, 1.224F, 4.0F, 1.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.653F, 0.417F, 1.209F, 1.0F, 1.415F)
          verticalLineTo(1.5F)
          curveTo(5.0F, 1.224F, 5.224F, 1.0F, 5.5F, 1.0F)
          reflectiveCurveTo(6.0F, 1.224F, 6.0F, 1.5F)
          verticalLineToRelative(4.415F)
          curveTo(6.583F, 5.709F, 7.0F, 5.153F, 7.0F, 4.5F)
          verticalLineToRelative(-3.0F)
          curveTo(7.0F, 1.224F, 7.224F, 1.0F, 7.5F, 1.0F)
          reflectiveCurveTo(8.0F, 1.224F, 8.0F, 1.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.21F, -0.859F, 2.218F, -2.0F, 2.45F)
          verticalLineToRelative(7.55F)
          curveTo(6.0F, 14.776F, 5.776F, 15.0F, 5.5F, 15.0F)
          reflectiveCurveTo(5.0F, 14.776F, 5.0F, 14.5F)
          verticalLineTo(6.95F)
          curveTo(3.859F, 6.718F, 3.0F, 5.71F, 3.0F, 4.5F)
          verticalLineToRelative(-3.0F)
          curveTo(3.0F, 1.224F, 3.224F, 1.0F, 3.5F, 1.0F)
          close()
          moveToRelative(6.979F, 1.478F)
          curveTo(10.638F, 2.32F, 10.817F, 2.196F, 11.0F, 2.115F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -0.337F, 0.174F, -0.717F, 0.479F, -1.022F)
          close()
          moveTo(11.0F, 8.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-13.0F)
          curveTo(12.0F, 1.224F, 11.776F, 1.0F, 11.5F, 1.0F)
          curveToRelative(-0.663F, 0.0F, -1.283F, 0.326F, -1.729F, 0.772F)
          curveTo(9.326F, 2.216F, 9.0F, 2.837F, 9.0F, 3.5F)
          verticalLineToRelative(4.0F)
          curveTo(9.0F, 7.776F, 9.224F, 8.0F, 9.5F, 8.0F)
          horizontalLineTo(11.0F)
          close()        
      }
    }
    return _food16!!
  }

private var _food16: ImageVector? = null
