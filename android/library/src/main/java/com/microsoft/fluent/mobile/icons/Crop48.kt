package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Crop48: ImageVector
  get() {
    if (_crop48 != null) {
      return _crop48!!
    }
    _crop48 = fluentIcon(name = "Filled.Crop48", 48f) {
      materialPath {
          moveTo(14.0F, 5.5F)
          curveTo(14.0F, 4.672F, 13.328F, 4.0F, 12.5F, 4.0F)
          reflectiveCurveTo(11.0F, 4.672F, 11.0F, 5.5F)
          verticalLineTo(11.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 11.0F, 4.0F, 11.672F, 4.0F, 12.5F)
          reflectiveCurveTo(4.672F, 14.0F, 5.5F, 14.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(16.25F)
          curveToRelative(0.0F, 3.728F, 3.022F, 6.75F, 6.75F, 6.75F)
          horizontalLineTo(34.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(37.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(43.328F, 34.0F, 42.5F, 34.0F)
          horizontalLineTo(17.75F)
          curveTo(15.679F, 34.0F, 14.0F, 32.321F, 14.0F, 30.25F)
          verticalLineTo(5.5F)
          close()
          moveToRelative(20.0F, 12.25F)
          verticalLineTo(32.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(17.75F)
          curveToRelative(0.0F, -3.728F, -3.022F, -6.75F, -6.75F, -6.75F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(14.25F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          close()        
      }
    }
    return _crop48!!
  }

private var _crop48: ImageVector? = null
