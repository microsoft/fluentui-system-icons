package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatWarning24: ImageVector
  get() {
    if (_chatWarning24 != null) {
      return _chatWarning24!!
    }
    _chatWarning24 = fluentIcon(name = "Filled.ChatWarning24", 24f) {
      materialPath {
          moveTo(22.0F, 11.998F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          reflectiveCurveToRelative(-10.0F, 4.477F, -10.0F, 10.0F)
          curveToRelative(0.0F, 1.643F, 0.397F, 3.23F, 1.145F, 4.65F)
          lineToRelative(-1.116F, 4.289F)
          curveToRelative(-0.037F, 0.14F, -0.037F, 0.288F, 0.0F, 0.428F)
          curveToRelative(0.118F, 0.454F, 0.582F, 0.727F, 1.036F, 0.608F)
          lineToRelative(4.29F, -1.117F)
          curveToRelative(1.42F, 0.746F, 3.005F, 1.142F, 4.645F, 1.142F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          close()
          moveTo(12.0F, 6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          verticalLineToRelative(6.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(7.25F)
          curveToRelative(0.0F, -0.415F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveToRelative(1.0F, 9.997F)
          curveToRelative(0.0F, 0.553F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.447F, -1.0F, -1.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _chatWarning24!!
  }

private var _chatWarning24: ImageVector? = null
