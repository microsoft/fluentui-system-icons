package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Door20: ImageVector
  get() {
    if (_door20 != null) {
      return _door20!!
    }
    _door20 = fluentIcon(name = "Filled.Door20", 20f) {
      materialPath {
          moveTo(4.5F, 4.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.052F, 0.0F, 0.103F, 0.003F, 0.153F, 0.008F)
          curveTo(14.91F, 2.585F, 15.5F, 3.223F, 15.5F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(4.0F)
          close()
          moveTo(7.0F, 11.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveTo(7.552F, 9.0F, 7.0F, 9.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _door20!!
  }

private var _door20: ImageVector? = null
