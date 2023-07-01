package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Chat28: ImageVector
  get() {
    if (_chat28 != null) {
      return _chat28!!
    }
    _chat28 = fluentIcon(name = "Filled.Chat28", 28f) {
      materialPath {
          moveTo(2.0F, 14.0F)
          curveTo(2.0F, 7.373F, 7.373F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          curveToRelative(-2.036F, 0.0F, -3.955F, -0.508F, -5.637F, -1.404F)
          lineToRelative(-4.77F, 1.357F)
          curveTo(2.651F, 26.22F, 1.781F, 25.35F, 2.05F, 24.409F)
          lineToRelative(1.356F, -4.77F)
          curveTo(2.508F, 17.959F, 2.0F, 16.038F, 2.0F, 14.0F)
          close()
          moveToRelative(7.5F, -2.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(18.164F, 11.0F, 17.75F, 11.0F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          close()
          moveToRelative(0.75F, 3.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(9.836F, 17.0F, 10.25F, 17.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-4.5F)
          close()        
      }
    }
    return _chat28!!
  }

private var _chat28: ImageVector? = null
