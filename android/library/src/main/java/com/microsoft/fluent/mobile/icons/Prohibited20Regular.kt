package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Prohibited20: ImageVector
  get() {
    if (_prohibited20 != null) {
      return _prohibited20!!
    }
    _prohibited20 = fluentIcon(name = "Regular.Prohibited20", 20f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveToRelative(0.0F, -1.753F, -0.644F, -3.356F, -1.71F, -4.584F)
          lineToRelative(-9.874F, 9.875F)
          curveTo(6.644F, 16.356F, 8.247F, 17.0F, 10.0F, 17.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, -3.134F, 7.0F, -7.0F)
          close()
          moveTo(4.71F, 14.584F)
          lineToRelative(9.874F, -9.875F)
          curveTo(13.356F, 3.644F, 11.753F, 3.0F, 10.0F, 3.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          curveToRelative(0.0F, 1.753F, 0.644F, 3.356F, 1.71F, 4.584F)
          close()        
      }
    }
    return _prohibited20!!
  }

private var _prohibited20: ImageVector? = null
