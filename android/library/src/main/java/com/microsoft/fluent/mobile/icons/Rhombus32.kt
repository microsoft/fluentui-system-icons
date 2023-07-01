package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Rhombus32: ImageVector
  get() {
    if (_rhombus32 != null) {
      return _rhombus32!!
    }
    _rhombus32 = fluentIcon(name = "Filled.Rhombus32", 32f) {
      materialPath {
          moveTo(10.524F, 5.0F)
          curveTo(9.194F, 5.0F, 8.0F, 5.81F, 7.506F, 7.043F)
          lineToRelative(-6.2F, 15.5F)
          curveTo(0.452F, 24.678F, 2.024F, 27.0F, 4.324F, 27.0F)
          horizontalLineToRelative(17.153F)
          curveToRelative(1.329F, 0.0F, 2.524F, -0.81F, 3.017F, -2.043F)
          lineToRelative(6.2F, -15.5F)
          curveTo(31.548F, 7.322F, 29.976F, 5.0F, 27.677F, 5.0F)
          horizontalLineTo(10.524F)
          close()        
      }
    }
    return _rhombus32!!
  }

private var _rhombus32: ImageVector? = null
