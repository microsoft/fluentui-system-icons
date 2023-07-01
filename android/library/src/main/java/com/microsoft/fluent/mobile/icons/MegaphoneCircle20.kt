package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MegaphoneCircle20: ImageVector
  get() {
    if (_megaphoneCircle20 != null) {
      return _megaphoneCircle20!!
    }
    _megaphoneCircle20 = fluentIcon(name = "Regular.MegaphoneCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 3.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()
          moveToRelative(-8.0F, 7.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(5.0F, 2.023F)
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
          lineTo(8.0F, 12.38F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          curveToRelative(0.52F, 0.0F, 0.948F, -0.397F, 0.996F, -0.905F)
          close()
          moveToRelative(2.671F, -6.08F)
          lineTo(6.166F, 9.342F)
          curveTo(6.066F, 9.376F, 6.0F, 9.47F, 6.0F, 9.576F)
          verticalLineToRelative(0.851F)
          curveToRelative(0.0F, 0.106F, 0.066F, 0.2F, 0.166F, 0.236F)
          lineToRelative(6.501F, 2.325F)
          curveToRelative(0.163F, 0.058F, 0.334F, -0.062F, 0.334F, -0.235F)
          verticalLineTo(7.25F)
          curveToRelative(0.0F, -0.173F, -0.171F, -0.294F, -0.334F, -0.235F)
          close()        
      }
    }
    return _megaphoneCircle20!!
  }

private var _megaphoneCircle20: ImageVector? = null
