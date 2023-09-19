package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MegaphoneCircle20: ImageVector
  get() {
    if (_megaphoneCircle20 != null) {
      return _megaphoneCircle20!!
    }
    _megaphoneCircle20 = fluentIcon(name = "Filled.MegaphoneCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveTo(7.0F, 12.023F)
          lineToRelative(-1.171F, -0.418F)
          curveTo(5.332F, 11.426F, 5.0F, 10.954F, 5.0F, 10.427F)
          verticalLineToRelative(-0.85F)
          curveToRelative(0.0F, -0.529F, 0.332F, -1.0F, 0.829F, -1.178F)
          lineToRelative(6.501F, -2.325F)
          curveToRelative(0.814F, -0.291F, 1.671F, 0.312F, 1.671F, 1.177F)
          verticalLineToRelative(5.502F)
          curveToRelative(0.0F, 0.864F, -0.857F, 1.468F, -1.67F, 1.177F)
          lineToRelative(-1.379F, -0.493F)
          curveTo(10.752F, 14.33F, 9.954F, 15.0F, 9.0F, 15.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-0.977F)
          close()
          moveToRelative(2.996F, 1.072F)
          curveTo(9.948F, 13.603F, 9.52F, 14.0F, 9.0F, 14.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-0.619F)
          lineToRelative(1.996F, 0.714F)
          close()        
      }
    }
    return _megaphoneCircle20!!
  }

private var _megaphoneCircle20: ImageVector? = null
