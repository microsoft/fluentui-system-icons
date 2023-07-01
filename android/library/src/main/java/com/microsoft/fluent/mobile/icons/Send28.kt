package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Send28: ImageVector
  get() {
    if (_send28 != null) {
      return _send28!!
    }
    _send28 = fluentIcon(name = "Regular.Send28", 28f) {
      materialPath {
          moveTo(2.043F, 4.076F)
          curveToRelative(-0.275F, -1.03F, 0.783F, -1.91F, 1.746F, -1.451F)
          lineToRelative(21.497F, 10.249F)
          curveToRelative(0.95F, 0.452F, 0.95F, 1.804F, 0.0F, 2.256F)
          lineTo(3.79F, 25.38F)
          curveToRelative(-0.963F, 0.458F, -2.021F, -0.422F, -1.746F, -1.452F)
          lineTo(4.7F, 14.002F)
          lineTo(2.044F, 4.076F)
          close()
          moveToRelative(4.008F, 10.676F)
          lineToRelative(-2.419F, 9.04F)
          lineToRelative(20.536F, -9.79F)
          lineToRelative(-20.535F, -9.79F)
          lineToRelative(2.418F, 9.04F)
          horizontalLineTo(17.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(6.05F)
          close()        
      }
    }
    return _send28!!
  }

private var _send28: ImageVector? = null
