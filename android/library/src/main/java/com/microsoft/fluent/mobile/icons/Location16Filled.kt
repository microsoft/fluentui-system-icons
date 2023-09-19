package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Location16: ImageVector
  get() {
    if (_location16 != null) {
      return _location16!!
    }
    _location16 = fluentIcon(name = "Filled.Location16", 16f) {
      materialPath {
          moveTo(9.156F, 14.544F)
          curveTo(10.899F, 13.01F, 14.0F, 9.876F, 14.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          reflectiveCurveTo(2.0F, 3.686F, 2.0F, 7.0F)
          curveToRelative(0.0F, 2.876F, 3.1F, 6.01F, 4.844F, 7.544F)
          curveToRelative(0.667F, 0.588F, 1.644F, 0.588F, 2.312F, 0.0F)
          close()
          moveTo(6.0F, 7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          close()        
      }
    }
    return _location16!!
  }

private var _location16: ImageVector? = null
