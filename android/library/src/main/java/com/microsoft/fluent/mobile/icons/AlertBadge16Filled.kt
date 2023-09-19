package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlertBadge16: ImageVector
  get() {
    if (_alertBadge16 != null) {
      return _alertBadge16!!
    }
    _alertBadge16 = fluentIcon(name = "Filled.AlertBadge16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(5.515F, 2.0F, 3.5F, 4.015F, 3.5F, 6.5F)
          verticalLineToRelative(2.401F)
          lineToRelative(-0.964F, 2.414F)
          curveToRelative(-0.062F, 0.154F, -0.043F, 0.328F, 0.05F, 0.465F)
          curveTo(2.679F, 11.918F, 2.834F, 12.0F, 3.0F, 12.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.166F, 0.0F, 0.321F, -0.082F, 0.414F, -0.22F)
          curveToRelative(0.093F, -0.137F, 0.112F, -0.311F, 0.05F, -0.465F)
          lineTo(12.5F, 8.9F)
          verticalLineTo(7.0F)
          curveTo(11.12F, 7.0F, 10.0F, 5.88F, 10.0F, 4.5F)
          curveToRelative(0.0F, -0.635F, 0.236F, -1.214F, 0.626F, -1.655F)
          curveTo(9.887F, 2.313F, 8.98F, 2.0F, 8.0F, 2.0F)
          close()
          moveToRelative(0.0F, 12.5F)
          curveToRelative(-0.932F, 0.0F, -1.715F, -0.637F, -1.937F, -1.5F)
          horizontalLineToRelative(3.874F)
          curveTo(9.715F, 13.863F, 8.932F, 14.5F, 8.0F, 14.5F)
          close()
          moveTo(12.5F, 6.0F)
          curveTo(13.328F, 6.0F, 14.0F, 5.328F, 14.0F, 4.5F)
          reflectiveCurveTo(13.328F, 3.0F, 12.5F, 3.0F)
          reflectiveCurveTo(11.0F, 3.672F, 11.0F, 4.5F)
          reflectiveCurveTo(11.672F, 6.0F, 12.5F, 6.0F)
          close()        
      }
    }
    return _alertBadge16!!
  }

private var _alertBadge16: ImageVector? = null
