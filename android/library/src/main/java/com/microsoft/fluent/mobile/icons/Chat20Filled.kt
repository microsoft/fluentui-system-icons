package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Chat20: ImageVector
  get() {
    if (_chat20 != null) {
      return _chat20!!
    }
    _chat20 = fluentIcon(name = "Filled.Chat20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          curveToRelative(-1.273F, 0.0F, -2.504F, -0.298F, -3.613F, -0.86F)
          lineToRelative(-0.121F, -0.065F)
          lineToRelative(-3.645F, 0.91F)
          curveToRelative(-0.31F, 0.078F, -0.595F, -0.148F, -0.62F, -0.441F)
          verticalLineToRelative(-0.082F)
          lineToRelative(0.014F, -0.083F)
          lineToRelative(0.91F, -3.644F)
          lineToRelative(-0.063F, -0.12F)
          curveToRelative(-0.455F, -0.896F, -0.738F, -1.873F, -0.83F, -2.887F)
          lineToRelative(-0.025F, -0.382F)
          lineTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveToRelative(0.5F, 9.0F)
          horizontalLineToRelative(-3.0F)
          lineToRelative(-0.09F, 0.008F)
          curveTo(7.177F, 11.05F, 7.0F, 11.255F, 7.0F, 11.5F)
          reflectiveCurveToRelative(0.177F, 0.45F, 0.41F, 0.492F)
          lineTo(7.5F, 12.0F)
          horizontalLineToRelative(3.0F)
          lineToRelative(0.09F, -0.008F)
          curveTo(10.823F, 11.95F, 11.0F, 11.745F, 11.0F, 11.5F)
          reflectiveCurveToRelative(-0.177F, -0.45F, -0.41F, -0.492F)
          lineTo(10.5F, 11.0F)
          close()
          moveToRelative(2.0F, -3.0F)
          horizontalLineToRelative(-5.0F)
          lineTo(7.41F, 8.008F)
          curveTo(7.177F, 8.05F, 7.0F, 8.255F, 7.0F, 8.5F)
          reflectiveCurveToRelative(0.177F, 0.45F, 0.41F, 0.492F)
          lineTo(7.5F, 9.0F)
          horizontalLineToRelative(5.0F)
          lineToRelative(0.09F, -0.008F)
          curveTo(12.823F, 8.95F, 13.0F, 8.745F, 13.0F, 8.5F)
          reflectiveCurveToRelative(-0.177F, -0.45F, -0.41F, -0.492F)
          lineTo(12.5F, 8.0F)
          close()        
      }
    }
    return _chat20!!
  }

private var _chat20: ImageVector? = null
