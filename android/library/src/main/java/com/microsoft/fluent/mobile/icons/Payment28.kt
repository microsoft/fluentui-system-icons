package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Payment28: ImageVector
  get() {
    if (_payment28 != null) {
      return _payment28!!
    }
    _payment28 = fluentIcon(name = "Filled.Payment28", 28f) {
      materialPath {
          moveTo(5.754F, 5.0F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineTo(9.5F)
          horizontalLineTo(26.0F)
          verticalLineTo(8.75F)
          curveTo(26.0F, 6.679F, 24.32F, 5.0F, 22.25F, 5.0F)
          horizontalLineTo(5.753F)
          close()
          moveToRelative(-3.75F, 14.25F)
          verticalLineTo(11.0F)
          horizontalLineTo(26.0F)
          verticalLineToRelative(8.25F)
          curveToRelative(0.0F, 2.071F, -1.68F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(5.753F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          close()
          moveTo(18.25F, 16.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(17.836F, 18.0F, 18.25F, 18.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-3.5F)
          close()        
      }
    }
    return _payment28!!
  }

private var _payment28: ImageVector? = null
