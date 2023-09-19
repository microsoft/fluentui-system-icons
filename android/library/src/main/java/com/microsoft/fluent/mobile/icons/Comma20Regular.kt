package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Comma20: ImageVector
  get() {
    if (_comma20 != null) {
      return _comma20!!
    }
    _comma20 = fluentIcon(name = "Regular.Comma20", 20f) {
      materialPath {
          moveTo(13.5F, 7.5F)
          curveTo(13.5F, 5.567F, 11.933F, 4.0F, 10.0F, 4.0F)
          reflectiveCurveTo(6.5F, 5.567F, 6.5F, 7.5F)
          reflectiveCurveTo(8.067F, 11.0F, 10.0F, 11.0F)
          curveToRelative(0.842F, 0.0F, 1.615F, -0.298F, 2.22F, -0.793F)
          curveToRelative(-0.262F, 1.167F, -0.693F, 2.133F, -1.236F, 2.881F)
          curveTo(10.071F, 14.348F, 8.84F, 15.0F, 7.5F, 15.0F)
          curveTo(7.224F, 15.0F, 7.0F, 15.224F, 7.0F, 15.5F)
          reflectiveCurveTo(7.224F, 16.0F, 7.5F, 16.0F)
          curveToRelative(1.698F, 0.0F, 3.216F, -0.839F, 4.294F, -2.325F)
          curveTo(12.866F, 12.197F, 13.5F, 10.086F, 13.5F, 7.5F)
          close()        
      }
    }
    return _comma20!!
  }

private var _comma20: ImageVector? = null
