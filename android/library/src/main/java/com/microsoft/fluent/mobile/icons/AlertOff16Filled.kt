package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlertOff16: ImageVector
  get() {
    if (_alertOff16 != null) {
      return _alertOff16!!
    }
    _alertOff16 = fluentIcon(name = "Filled.AlertOff16", 16f) {
      materialPath {
          moveTo(11.293F, 12.0F)
          lineToRelative(2.853F, 2.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.765F, 2.764F)
          curveTo(3.647F, 5.191F, 3.5F, 5.828F, 3.5F, 6.5F)
          verticalLineToRelative(2.401F)
          lineToRelative(-0.964F, 2.414F)
          curveToRelative(-0.062F, 0.154F, -0.043F, 0.328F, 0.05F, 0.465F)
          curveTo(2.679F, 11.918F, 2.834F, 12.0F, 3.0F, 12.0F)
          horizontalLineToRelative(8.293F)
          close()
          moveToRelative(2.171F, -0.685F)
          lineToRelative(0.016F, 0.043F)
          lineToRelative(-8.336F, -8.335F)
          curveTo(5.92F, 2.383F, 6.915F, 2.0F, 8.0F, 2.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          verticalLineToRelative(2.401F)
          lineToRelative(0.964F, 2.414F)
          close()
          moveTo(8.0F, 14.5F)
          curveToRelative(-0.932F, 0.0F, -1.715F, -0.637F, -1.937F, -1.5F)
          horizontalLineToRelative(3.874F)
          curveTo(9.715F, 13.863F, 8.932F, 14.5F, 8.0F, 14.5F)
          close()        
      }
    }
    return _alertOff16!!
  }

private var _alertOff16: ImageVector? = null
