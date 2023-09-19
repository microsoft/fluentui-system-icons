package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mic32: ImageVector
  get() {
    if (_mic32 != null) {
      return _mic32!!
    }
    _mic32 = fluentIcon(name = "Filled.Mic32", 32f) {
      materialPath {
          moveTo(16.0F, 2.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, 2.686F, -6.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 3.314F, 2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveTo(7.0F, 15.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 4.418F, 3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 5.186F, -3.947F, 9.45F, -9.001F, 9.95F)
          lineTo(17.0F, 26.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-3.0F)
          lineToRelative(0.001F, -0.05F)
          curveTo(9.947F, 25.45F, 6.0F, 21.187F, 6.0F, 16.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _mic32!!
  }

private var _mic32: ImageVector? = null
