package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DismissCircle24: ImageVector
  get() {
    if (_dismissCircle24 != null) {
      return _dismissCircle24!!
    }
    _dismissCircle24 = fluentIcon(name = "Filled.DismissCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(3.53F, 6.47F)
          lineToRelative(-0.084F, -0.073F)
          curveToRelative(-0.26F, -0.194F, -0.619F, -0.196F, -0.882F, -0.007F)
          lineTo(14.47F, 8.47F)
          lineTo(12.0F, 10.939F)
          lineToRelative(-2.47F, -2.47F)
          lineToRelative(-0.084F, -0.072F)
          curveTo(9.186F, 8.203F, 8.827F, 8.201F, 8.564F, 8.39F)
          lineTo(8.47F, 8.47F)
          lineTo(8.397F, 8.554F)
          curveTo(8.203F, 8.814F, 8.201F, 9.173F, 8.39F, 9.436F)
          lineTo(8.47F, 9.53F)
          lineTo(10.939F, 12.0F)
          lineToRelative(-2.47F, 2.47F)
          lineToRelative(-0.072F, 0.084F)
          curveToRelative(-0.194F, 0.26F, -0.196F, 0.619F, -0.007F, 0.882F)
          lineToRelative(0.08F, 0.094F)
          lineToRelative(0.084F, 0.073F)
          curveToRelative(0.26F, 0.194F, 0.619F, 0.196F, 0.882F, 0.007F)
          lineToRelative(0.094F, -0.08F)
          lineTo(12.0F, 13.061F)
          lineToRelative(2.47F, 2.47F)
          lineToRelative(0.084F, 0.072F)
          curveToRelative(0.26F, 0.194F, 0.619F, 0.196F, 0.882F, 0.007F)
          lineToRelative(0.094F, -0.08F)
          lineToRelative(0.073F, -0.084F)
          curveToRelative(0.194F, -0.26F, 0.196F, -0.619F, 0.007F, -0.882F)
          lineToRelative(-0.08F, -0.094F)
          lineTo(13.061F, 12.0F)
          lineToRelative(2.47F, -2.47F)
          lineToRelative(0.072F, -0.084F)
          curveToRelative(0.194F, -0.26F, 0.196F, -0.619F, 0.007F, -0.882F)
          lineTo(15.53F, 8.47F)
          lineToRelative(-0.084F, -0.073F)
          lineToRelative(0.084F, 0.073F)
          close()        
      }
    }
    return _dismissCircle24!!
  }

private var _dismissCircle24: ImageVector? = null
