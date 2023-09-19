package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Next20: ImageVector
  get() {
    if (_next20 != null) {
      return _next20!!
    }
    _next20 = fluentIcon(name = "Filled.Next20", 20f) {
      materialPath {
          moveTo(3.0F, 4.252F)
          curveToRelative(0.0F, -1.0F, 1.116F, -1.595F, 1.947F, -1.038F)
          lineToRelative(8.499F, 5.707F)
          curveToRelative(0.734F, 0.494F, 0.738F, 1.573F, 0.007F, 2.071F)
          lineToRelative(-8.5F, 5.793F)
          curveTo(4.125F, 17.351F, 3.0F, 16.756F, 3.0F, 15.752F)
          verticalLineToRelative(-11.5F)
          close()
          moveTo(17.0F, 3.5F)
          curveTo(17.0F, 3.224F, 16.776F, 3.0F, 16.5F, 3.0F)
          reflectiveCurveTo(16.0F, 3.224F, 16.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-13.0F)
          close()        
      }
    }
    return _next20!!
  }

private var _next20: ImageVector? = null
