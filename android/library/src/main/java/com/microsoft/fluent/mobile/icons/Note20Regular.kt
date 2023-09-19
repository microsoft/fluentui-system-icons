package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Note20: ImageVector
  get() {
    if (_note20 != null) {
      return _note20!!
    }
    _note20 = fluentIcon(name = "Regular.Note20", 20f) {
      materialPath {
          moveTo(14.0F, 3.0F)
          curveToRelative(1.598F, 0.0F, 2.904F, 1.249F, 2.995F, 2.824F)
          lineTo(17.0F, 6.0F)
          verticalLineToRelative(4.379F)
          curveToRelative(0.0F, 0.471F, -0.166F, 0.926F, -0.467F, 1.284F)
          lineToRelative(-0.119F, 0.13F)
          lineToRelative(-4.621F, 4.621F)
          curveToRelative(-0.333F, 0.334F, -0.772F, 0.537F, -1.238F, 0.578F)
          lineTo(10.379F, 17.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.598F, 0.0F, -2.904F, -1.249F, -2.995F, -2.824F)
          lineTo(3.0F, 14.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.598F, 1.249F, -2.904F, 2.824F, -2.995F)
          lineTo(6.0F, 3.0F)
          horizontalLineToRelative(8.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineTo(6.0F)
          curveTo(4.946F, 4.0F, 4.082F, 4.816F, 4.005F, 5.85F)
          lineTo(4.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.054F, 0.816F, 1.918F, 1.85F, 1.995F)
          lineTo(6.0F, 16.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -1.598F, 1.249F, -2.904F, 2.824F, -2.995F)
          lineTo(13.0F, 10.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.054F, -0.816F, -1.918F, -1.85F, -1.995F)
          lineTo(14.0F, 4.0F)
          close()
          moveToRelative(1.783F, 7.001F)
          lineTo(13.0F, 11.0F)
          curveToRelative(-1.054F, 0.0F, -1.918F, 0.816F, -1.995F, 1.85F)
          lineTo(11.0F, 13.0F)
          verticalLineToRelative(2.781F)
          lineToRelative(0.086F, -0.074F)
          lineToRelative(4.621F, -4.621F)
          curveToRelative(0.027F, -0.027F, 0.052F, -0.055F, 0.075F, -0.085F)
          close()        
      }
    }
    return _note20!!
  }

private var _note20: ImageVector? = null
