package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Prohibited12: ImageVector
  get() {
    if (_prohibited12 != null) {
      return _prohibited12!!
    }
    _prohibited12 = fluentIcon(name = "Regular.Prohibited12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveTo(3.239F, 1.0F, 1.0F, 3.239F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          curveToRelative(0.924F, 0.0F, 1.775F, 0.313F, 2.453F, 0.84F)
          lineTo(2.84F, 8.453F)
          curveTo(2.314F, 7.775F, 2.0F, 6.924F, 2.0F, 6.0F)
          close()
          moveToRelative(1.547F, 3.16F)
          lineTo(9.16F, 3.547F)
          curveTo(9.686F, 4.224F, 10.0F, 5.076F, 10.0F, 6.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          curveToRelative(-0.924F, 0.0F, -1.776F, -0.314F, -2.453F, -0.84F)
          close()        
      }
    }
    return _prohibited12!!
  }

private var _prohibited12: ImageVector? = null
