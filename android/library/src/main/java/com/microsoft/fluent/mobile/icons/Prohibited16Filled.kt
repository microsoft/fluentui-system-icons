package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Prohibited16: ImageVector
  get() {
    if (_prohibited16 != null) {
      return _prohibited16!!
    }
    _prohibited16 = fluentIcon(name = "Filled.Prohibited16", 16f) {
      materialPath {
          moveTo(8.0F, 3.5F)
          curveTo(5.515F, 3.5F, 3.5F, 5.515F, 3.5F, 8.0F)
          curveToRelative(0.0F, 0.972F, 0.308F, 1.872F, 0.832F, 2.607F)
          lineToRelative(6.275F, -6.275F)
          curveTo(9.872F, 3.808F, 8.972F, 3.5F, 8.0F, 3.5F)
          close()
          moveToRelative(3.668F, 1.893F)
          lineToRelative(-6.275F, 6.275F)
          curveTo(6.128F, 12.192F, 7.028F, 12.5F, 8.0F, 12.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          curveToRelative(0.0F, -0.972F, -0.308F, -1.872F, -0.832F, -2.607F)
          close()
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()        
      }
    }
    return _prohibited16!!
  }

private var _prohibited16: ImageVector? = null
