package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonCircle20: ImageVector
  get() {
    if (_personCircle20 != null) {
      return _personCircle20!!
    }
    _personCircle20 = fluentIcon(name = "Filled.PersonCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveTo(8.0F, 7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveToRelative(-0.5F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          curveToRelative(0.0F, 1.116F, -0.459F, 2.01F, -1.212F, 2.615F)
          curveTo(12.047F, 14.71F, 11.053F, 15.0F, 10.0F, 15.0F)
          curveToRelative(-1.053F, 0.0F, -2.047F, -0.29F, -2.788F, -0.885F)
          curveTo(6.46F, 13.51F, 6.0F, 12.616F, 6.0F, 11.5F)
          curveTo(6.0F, 10.672F, 6.672F, 10.0F, 7.5F, 10.0F)
          close()        
      }
    }
    return _personCircle20!!
  }

private var _personCircle20: ImageVector? = null
