package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ScreenSearch24: ImageVector
  get() {
    if (_screenSearch24 != null) {
      return _screenSearch24!!
    }
    _screenSearch24 = fluentIcon(name = "Filled.ScreenSearch24", 24f) {
      materialPath {
          moveTo(2.0F, 7.25F)
          curveTo(2.0F, 5.455F, 3.455F, 4.0F, 5.25F, 4.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.545F, 4.0F, 22.0F, 5.455F, 22.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-6.275F)
          lineToRelative(-2.05F, -2.05F)
          curveTo(10.793F, 17.213F, 11.0F, 16.38F, 11.0F, 15.5F)
          curveToRelative(0.0F, -3.038F, -2.462F, -5.5F, -5.5F, -5.5F)
          curveToRelative(-1.33F, 0.0F, -2.55F, 0.472F, -3.5F, 1.257F)
          verticalLineTo(7.25F)
          close()
          moveTo(5.5F, 20.0F)
          curveToRelative(0.972F, 0.0F, 1.872F, -0.308F, 2.607F, -0.832F)
          lineToRelative(2.613F, 2.612F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.612F, -2.613F)
          curveTo(9.692F, 17.372F, 10.0F, 16.472F, 10.0F, 15.5F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          reflectiveCurveTo(1.0F, 13.015F, 1.0F, 15.5F)
          reflectiveCurveTo(3.015F, 20.0F, 5.5F, 20.0F)
          close()
          moveToRelative(0.0F, -1.5F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          close()        
      }
    }
    return _screenSearch24!!
  }

private var _screenSearch24: ImageVector? = null
