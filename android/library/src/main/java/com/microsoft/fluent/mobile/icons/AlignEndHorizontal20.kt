package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignEndHorizontal20: ImageVector
  get() {
    if (_alignEndHorizontal20 != null) {
      return _alignEndHorizontal20!!
    }
    _alignEndHorizontal20 = fluentIcon(name = "Filled.AlignEndHorizontal20", 20f) {
      materialPath {
          moveTo(16.0F, 17.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-15.0F)
          curveTo(17.0F, 2.224F, 16.776F, 2.0F, 16.5F, 2.0F)
          reflectiveCurveTo(16.0F, 2.224F, 16.0F, 2.5F)
          verticalLineToRelative(15.0F)
          close()
          moveTo(10.0F, 4.0F)
          curveTo(8.895F, 4.0F, 8.0F, 4.895F, 8.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-2.0F)
          close()        
      }
    }
    return _alignEndHorizontal20!!
  }

private var _alignEndHorizontal20: ImageVector? = null
