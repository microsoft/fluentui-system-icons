package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SendClock20: ImageVector
  get() {
    if (_sendClock20 != null) {
      return _sendClock20!!
    }
    _sendClock20 = fluentIcon(name = "Regular.SendClock20", 20f) {
      materialPath {
          moveTo(2.184F, 1.112F)
          curveToRelative(0.153F, -0.124F, 0.364F, -0.147F, 0.54F, -0.06F)
          lineToRelative(15.0F, 7.5F)
          curveToRelative(0.247F, 0.124F, 0.347F, 0.425F, 0.223F, 0.672F)
          curveToRelative(-0.123F, 0.247F, -0.424F, 0.347F, -0.67F, 0.223F)
          lineTo(3.268F, 2.444F)
          lineTo(4.884F, 8.5F)
          horizontalLineTo(11.5F)
          curveTo(11.776F, 8.5F, 12.0F, 8.724F, 12.0F, 9.0F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(4.884F)
          lineTo(3.27F, 15.556F)
          lineToRelative(6.104F, -3.052F)
          curveToRelative(-0.158F, 0.406F, -0.27F, 0.836F, -0.327F, 1.282F)
          lineToRelative(-6.322F, 3.161F)
          curveToRelative(-0.176F, 0.088F, -0.387F, 0.065F, -0.54F, -0.06F)
          curveToRelative(-0.152F, -0.124F, -0.218F, -0.326F, -0.167F, -0.516F)
          lineTo(3.983F, 9.0F)
          lineTo(2.016F, 1.629F)
          curveToRelative(-0.05F, -0.19F, 0.015F, -0.392F, 0.167F, -0.517F)
          close()
          moveTo(19.0F, 14.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveTo(14.5F, 12.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(16.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.276F, 14.0F, 16.0F, 14.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(-1.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _sendClock20!!
  }

private var _sendClock20: ImageVector? = null
