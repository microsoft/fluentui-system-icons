package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatWarning20: ImageVector
  get() {
    if (_chatWarning20 != null) {
      return _chatWarning20!!
    }
    _chatWarning20 = fluentIcon(name = "Filled.ChatWarning20", 20f) {
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
          moveToRelative(0.0F, 3.5F)
          curveTo(9.724F, 5.5F, 9.5F, 5.724F, 9.5F, 6.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()
          moveToRelative(0.0F, 9.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(10.414F, 13.0F, 10.0F, 13.0F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(9.586F, 14.5F, 10.0F, 14.5F)
          close()        
      }
    }
    return _chatWarning20!!
  }

private var _chatWarning20: ImageVector? = null
