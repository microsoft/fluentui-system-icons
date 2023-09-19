package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Previous20: ImageVector
  get() {
    if (_previous20 != null) {
      return _previous20!!
    }
    _previous20 = fluentIcon(name = "Regular.Previous20", 20f) {
      materialPath {
          moveTo(3.0F, 3.5F)
          curveTo(3.0F, 3.224F, 3.224F, 3.0F, 3.5F, 3.0F)
          reflectiveCurveTo(4.0F, 3.224F, 4.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(4.0F, 16.776F, 3.776F, 17.0F, 3.5F, 17.0F)
          reflectiveCurveTo(3.0F, 16.776F, 3.0F, 16.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveToRelative(14.0F, 0.752F)
          curveToRelative(0.0F, -1.0F, -1.117F, -1.595F, -1.947F, -1.038F)
          lineToRelative(-8.5F, 5.707F)
          curveToRelative(-0.734F, 0.494F, -0.737F, 1.573F, -0.006F, 2.071F)
          lineToRelative(8.499F, 5.793F)
          curveTo(15.876F, 17.351F, 17.0F, 16.756F, 17.0F, 15.752F)
          verticalLineToRelative(-11.5F)
          close()
          moveToRelative(-1.39F, -0.207F)
          curveTo(15.777F, 3.933F, 16.0F, 4.052F, 16.0F, 4.252F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.2F, -0.225F, 0.32F, -0.391F, 0.207F)
          lineToRelative(-8.5F, -5.793F)
          curveToRelative(-0.145F, -0.1F, -0.145F, -0.316F, 0.002F, -0.414F)
          lineToRelative(8.5F, -5.707F)
          close()        
      }
    }
    return _previous20!!
  }

private var _previous20: ImageVector? = null
