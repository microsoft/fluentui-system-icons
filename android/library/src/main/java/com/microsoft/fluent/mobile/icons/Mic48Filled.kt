package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mic48: ImageVector
  get() {
    if (_mic48 != null) {
      return _mic48!!
    }
    _mic48 = fluentIcon(name = "Filled.Mic48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 4.418F, 3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -4.418F, -3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveToRelative(1.0F, 33.715F)
          curveToRelative(7.265F, -0.513F, 13.0F, -6.57F, 13.0F, -13.965F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          curveToRelative(0.0F, 6.351F, -5.149F, 11.5F, -11.5F, 11.5F)
          reflectiveCurveToRelative(-11.5F, -5.149F, -11.5F, -11.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveTo(10.0F, 23.06F, 10.0F, 23.75F)
          curveToRelative(0.0F, 7.225F, 5.473F, 13.172F, 12.5F, 13.92F)
          verticalLineToRelative(5.08F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveTo(25.0F, 43.44F, 25.0F, 42.75F)
          verticalLineToRelative(-5.035F)
          close()        
      }
    }
    return _mic48!!
  }

private var _mic48: ImageVector? = null
