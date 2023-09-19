package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Payment28: ImageVector
  get() {
    if (_payment28 != null) {
      return _payment28!!
    }
    _payment28 = fluentIcon(name = "Regular.Payment28", 28f) {
      materialPath {
          moveTo(18.25F, 16.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(17.836F, 18.0F, 18.25F, 18.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-3.5F)
          close()
          moveTo(2.004F, 8.75F)
          curveTo(2.004F, 6.679F, 3.683F, 5.0F, 5.754F, 5.0F)
          horizontalLineTo(22.25F)
          curveTo(24.32F, 5.0F, 26.0F, 6.679F, 26.0F, 8.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 2.071F, -1.68F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(5.753F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineTo(8.75F)
          close()
          moveToRelative(3.75F, -2.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, 1.007F, -2.25F, 2.25F)
          verticalLineTo(9.5F)
          horizontalLineTo(24.5F)
          verticalLineTo(8.75F)
          curveToRelative(0.0F, -1.243F, -1.008F, -2.25F, -2.25F, -2.25F)
          horizontalLineTo(5.753F)
          close()
          moveToRelative(-2.25F, 12.75F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineTo(22.25F)
          curveToRelative(1.242F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(11.0F)
          horizontalLineTo(3.503F)
          verticalLineToRelative(8.25F)
          close()        
      }
    }
    return _payment28!!
  }

private var _payment28: ImageVector? = null
