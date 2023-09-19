package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Compose24: ImageVector
  get() {
    if (_compose24 != null) {
      return _compose24!!
    }
    _compose24 = fluentIcon(name = "Filled.Compose24", 24f) {
      materialPath {
          moveTo(11.957F, 13.457F)
          lineToRelative(9.75F, -9.75F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineToRelative(-9.75F, 9.75F)
          lineToRelative(-0.293F, 1.707F)
          lineToRelative(1.707F, -0.293F)
          close()
          moveTo(6.5F, 3.0F)
          curveTo(4.567F, 3.0F, 3.0F, 4.567F, 3.0F, 6.5F)
          verticalLineToRelative(11.0F)
          curveTo(3.0F, 19.433F, 4.567F, 21.0F, 6.5F, 21.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(5.672F, 19.0F, 5.0F, 18.328F, 5.0F, 17.5F)
          verticalLineToRelative(-11.0F)
          curveTo(5.0F, 5.672F, 5.672F, 5.0F, 6.5F, 5.0F)
          horizontalLineTo(14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.5F)
          close()        
      }
    }
    return _compose24!!
  }

private var _compose24: ImageVector? = null
