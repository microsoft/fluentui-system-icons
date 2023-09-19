package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceBlocked12: ImageVector
  get() {
    if (_presenceBlocked12 != null) {
      return _presenceBlocked12!!
    }
    _presenceBlocked12 = fluentIcon(name = "Regular.PresenceBlocked12", 12f) {
      materialPath {
          moveTo(12.0F, 6.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveTo(0.0F, 9.314F, 0.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveToRelative(-1.5F, 0.0F)
          curveToRelative(0.0F, -0.972F, -0.308F, -1.872F, -0.832F, -2.607F)
          lineTo(3.393F, 9.668F)
          curveTo(4.128F, 10.192F, 5.028F, 10.5F, 6.0F, 10.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          close()
          moveTo(8.607F, 2.332F)
          curveTo(7.872F, 1.808F, 6.972F, 1.5F, 6.0F, 1.5F)
          curveTo(3.515F, 1.5F, 1.5F, 3.515F, 1.5F, 6.0F)
          curveToRelative(0.0F, 0.972F, 0.308F, 1.872F, 0.832F, 2.607F)
          lineToRelative(6.275F, -6.275F)
          close()        
      }
    }
    return _presenceBlocked12!!
  }

private var _presenceBlocked12: ImageVector? = null
