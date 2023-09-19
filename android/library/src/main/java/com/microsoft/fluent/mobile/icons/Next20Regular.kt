package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Next20: ImageVector
  get() {
    if (_next20 != null) {
      return _next20!!
    }
    _next20 = fluentIcon(name = "Regular.Next20", 20f) {
      materialPath {
          moveTo(17.0F, 3.5F)
          curveTo(17.0F, 3.224F, 16.776F, 3.0F, 16.5F, 3.0F)
          reflectiveCurveTo(16.0F, 3.224F, 16.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(3.0F, 4.252F)
          curveToRelative(0.0F, -1.0F, 1.117F, -1.595F, 1.947F, -1.038F)
          lineToRelative(8.5F, 5.707F)
          curveToRelative(0.734F, 0.494F, 0.738F, 1.573F, 0.007F, 2.071F)
          lineToRelative(-8.5F, 5.793F)
          curveTo(4.124F, 17.351F, 3.0F, 16.756F, 3.0F, 15.752F)
          verticalLineToRelative(-11.5F)
          close()
          moveToRelative(1.39F, -0.207F)
          curveTo(4.223F, 3.933F, 4.0F, 4.052F, 4.0F, 4.252F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.2F, 0.225F, 0.32F, 0.391F, 0.207F)
          lineToRelative(8.5F, -5.793F)
          curveToRelative(0.146F, -0.1F, 0.145F, -0.316F, -0.002F, -0.414F)
          lineToRelative(-8.5F, -5.707F)
          close()        
      }
    }
    return _next20!!
  }

private var _next20: ImageVector? = null
