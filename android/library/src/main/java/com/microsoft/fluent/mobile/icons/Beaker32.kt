package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Beaker32: ImageVector
  get() {
    if (_beaker32 != null) {
      return _beaker32!!
    }
    _beaker32 = fluentIcon(name = "Filled.Beaker32", 32f) {
      materialPath {
          moveTo(12.0F, 5.0F)
          verticalLineToRelative(8.438F)
          curveToRelative(0.0F, 0.814F, -0.248F, 1.608F, -0.712F, 2.277F)
          lineTo(9.706F, 18.0F)
          horizontalLineToRelative(12.587F)
          lineToRelative(-1.582F, -2.285F)
          curveTo(20.248F, 15.046F, 20.0F, 14.252F, 20.0F, 13.438F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(11.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(1.0F)
          close()
          moveToRelative(11.677F, 15.0F)
          horizontalLineTo(8.322F)
          lineToRelative(-2.744F, 3.963F)
          curveTo(4.104F, 26.092F, 5.628F, 29.0F, 8.218F, 29.0F)
          horizontalLineToRelative(15.564F)
          curveToRelative(2.589F, 0.0F, 4.113F, -2.908F, 2.639F, -5.037F)
          lineTo(23.677F, 20.0F)
          close()        
      }
    }
    return _beaker32!!
  }

private var _beaker32: ImageVector? = null
