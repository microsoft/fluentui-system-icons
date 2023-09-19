package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EqualOff24: ImageVector
  get() {
    if (_equalOff24 != null) {
      return _equalOff24!!
    }
    _equalOff24 = fluentIcon(name = "Filled.EqualOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(6.94F, 8.0F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 8.0F, 3.0F, 8.448F, 3.0F, 9.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.94F)
          lineToRelative(4.0F, 4.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(10.94F)
          lineToRelative(5.78F, 5.78F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(20.0F, 14.0F)
          horizontalLineToRelative(-2.818F)
          lineToRelative(2.0F, 2.0F)
          horizontalLineTo(20.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-8.818F, -6.0F)
          lineToRelative(2.0F, 2.0F)
          horizontalLineTo(20.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-8.818F)
          close()        
      }
    }
    return _equalOff24!!
  }

private var _equalOff24: ImageVector? = null
