package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Prohibited16: ImageVector
  get() {
    if (_prohibited16 != null) {
      return _prohibited16!!
    }
    _prohibited16 = fluentIcon(name = "Regular.Prohibited16", 16f) {
      materialPath {
          moveTo(8.0F, 3.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          curveToRelative(0.0F, 1.2F, 0.423F, 2.302F, 1.128F, 3.164F)
          lineToRelative(7.036F, -7.035F)
          curveTo(10.302F, 3.422F, 9.201F, 3.0F, 8.0F, 3.0F)
          close()
          moveToRelative(3.871F, 1.836F)
          lineTo(4.836F, 11.87F)
          curveTo(5.698F, 12.577F, 6.799F, 13.0F, 8.0F, 13.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          curveToRelative(0.0F, -1.2F, -0.423F, -2.302F, -1.129F, -3.164F)
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
