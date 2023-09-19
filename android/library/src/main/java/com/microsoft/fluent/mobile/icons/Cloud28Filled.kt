package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cloud28: ImageVector
  get() {
    if (_cloud28 != null) {
      return _cloud28!!
    }
    _cloud28 = fluentIcon(name = "Filled.Cloud28", 28f) {
      materialPath {
          moveTo(14.0F, 6.0F)
          curveToRelative(-3.422F, 0.0F, -6.226F, 2.644F, -6.481F, 6.0F)
          horizontalLineTo(7.25F)
          curveToRelative(-2.623F, 0.0F, -4.75F, 2.127F, -4.75F, 4.75F)
          reflectiveCurveToRelative(2.127F, 4.75F, 4.75F, 4.75F)
          horizontalLineToRelative(13.5F)
          curveToRelative(2.623F, 0.0F, 4.75F, -2.127F, 4.75F, -4.75F)
          reflectiveCurveTo(23.373F, 12.0F, 20.75F, 12.0F)
          horizontalLineToRelative(-0.269F)
          curveTo(20.226F, 8.644F, 17.421F, 6.0F, 14.0F, 6.0F)
          close()        
      }
    }
    return _cloud28!!
  }

private var _cloud28: ImageVector? = null
