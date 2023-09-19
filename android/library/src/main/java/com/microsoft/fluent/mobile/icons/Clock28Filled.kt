package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clock28: ImageVector
  get() {
    if (_clock28 != null) {
      return _clock28!!
    }
    _clock28 = fluentIcon(name = "Filled.Clock28", 28f) {
      materialPath {
          moveTo(18.25F, 15.5F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-7.0F)
          curveTo(12.5F, 7.336F, 12.836F, 7.0F, 13.25F, 7.0F)
          reflectiveCurveTo(14.0F, 7.336F, 14.0F, 7.75F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(4.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          close()
          moveTo(14.0F, 2.0F)
          curveTo(7.372F, 2.0F, 2.0F, 7.373F, 2.0F, 14.0F)
          reflectiveCurveToRelative(5.372F, 12.0F, 12.0F, 12.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          close()        
      }
    }
    return _clock28!!
  }

private var _clock28: ImageVector? = null
