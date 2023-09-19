package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Crop48: ImageVector
  get() {
    if (_crop48 != null) {
      return _crop48!!
    }
    _crop48 = fluentIcon(name = "Regular.Crop48", 48f) {
      materialPath {
          moveTo(14.0F, 5.25F)
          curveTo(14.0F, 4.56F, 13.44F, 4.0F, 12.75F, 4.0F)
          reflectiveCurveTo(11.5F, 4.56F, 11.5F, 5.25F)
          verticalLineToRelative(6.25F)
          horizontalLineTo(5.25F)
          curveTo(4.56F, 11.5F, 4.0F, 12.06F, 4.0F, 12.75F)
          reflectiveCurveTo(4.56F, 14.0F, 5.25F, 14.0F)
          horizontalLineToRelative(6.25F)
          verticalLineToRelative(16.25F)
          curveToRelative(0.0F, 3.452F, 2.798F, 6.25F, 6.25F, 6.25F)
          horizontalLineTo(34.0F)
          verticalLineToRelative(6.25F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(36.5F)
          horizontalLineToRelative(6.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(43.44F, 34.0F, 42.75F, 34.0F)
          horizontalLineToRelative(-25.0F)
          curveTo(15.679F, 34.0F, 14.0F, 32.321F, 14.0F, 30.25F)
          verticalLineToRelative(-25.0F)
          close()
          moveToRelative(20.0F, 12.5F)
          verticalLineTo(32.0F)
          horizontalLineToRelative(2.5F)
          verticalLineTo(17.75F)
          curveToRelative(0.0F, -3.452F, -2.798F, -6.25F, -6.25F, -6.25F)
          horizontalLineTo(16.0F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(14.25F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          close()        
      }
    }
    return _crop48!!
  }

private var _crop48: ImageVector? = null
