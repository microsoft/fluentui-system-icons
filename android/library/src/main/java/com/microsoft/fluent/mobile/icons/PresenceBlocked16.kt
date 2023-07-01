package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceBlocked16: ImageVector
  get() {
    if (_presenceBlocked16 != null) {
      return _presenceBlocked16!!
    }
    _presenceBlocked16 = fluentIcon(name = "Regular.PresenceBlocked16", 16f) {
      materialPath {
          moveTo(16.0F, 8.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          close()
          moveToRelative(-2.0F, 0.0F)
          curveToRelative(0.0F, -1.296F, -0.41F, -2.496F, -1.11F, -3.477F)
          lineToRelative(-8.367F, 8.368F)
          curveTo(5.504F, 13.589F, 6.704F, 14.0F, 8.0F, 14.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          close()
          moveToRelative(-2.524F, -4.89F)
          curveTo(10.496F, 2.41F, 9.296F, 2.0F, 8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          curveToRelative(0.0F, 1.296F, 0.41F, 2.496F, 1.11F, 3.476F)
          lineToRelative(8.367F, -8.367F)
          close()        
      }
    }
    return _presenceBlocked16!!
  }

private var _presenceBlocked16: ImageVector? = null
