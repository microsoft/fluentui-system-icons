package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RibbonStar20: ImageVector
  get() {
    if (_ribbonStar20 != null) {
      return _ribbonStar20!!
    }
    _ribbonStar20 = fluentIcon(name = "Filled.RibbonStar20", 20f) {
      materialPath {
          moveTo(16.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveTo(9.847F, 5.102F)
          lineTo(9.13F, 6.655F)
          curveToRelative(-0.025F, 0.055F, -0.078F, 0.093F, -0.138F, 0.1F)
          lineTo(7.293F, 6.957F)
          curveToRelative(-0.148F, 0.017F, -0.207F, 0.2F, -0.098F, 0.302F)
          lineTo(8.451F, 8.42F)
          curveToRelative(0.045F, 0.041F, 0.065F, 0.103F, 0.053F, 0.163F)
          lineTo(8.17F, 10.26F)
          curveToRelative(-0.03F, 0.147F, 0.126F, 0.26F, 0.257F, 0.187F)
          lineTo(9.92F, 9.612F)
          curveToRelative(0.053F, -0.03F, 0.118F, -0.03F, 0.171F, 0.0F)
          lineToRelative(1.492F, 0.835F)
          curveToRelative(0.13F, 0.073F, 0.287F, -0.04F, 0.258F, -0.187F)
          lineToRelative(-0.334F, -1.677F)
          curveToRelative(-0.012F, -0.06F, 0.008F, -0.122F, 0.053F, -0.163F)
          lineToRelative(1.256F, -1.161F)
          curveToRelative(0.11F, -0.101F, 0.05F, -0.285F, -0.099F, -0.302F)
          lineTo(11.02F, 6.755F)
          curveToRelative(-0.06F, -0.007F, -0.113F, -0.045F, -0.138F, -0.1F)
          lineToRelative(-0.717F, -1.553F)
          curveToRelative(-0.062F, -0.136F, -0.255F, -0.136F, -0.317F, 0.0F)
          close()
          moveTo(10.0F, 15.0F)
          curveToRelative(1.487F, 0.0F, 2.866F, -0.464F, 4.0F, -1.255F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.187F, -0.105F, 0.359F, -0.271F, 0.444F)
          curveToRelative(-0.167F, 0.086F, -0.367F, 0.072F, -0.52F, -0.037F)
          lineTo(10.0F, 16.0F)
          lineToRelative(-3.21F, 1.907F)
          curveToRelative(-0.152F, 0.108F, -0.352F, 0.123F, -0.519F, 0.037F)
          curveTo(6.105F, 17.86F, 6.0F, 17.687F, 6.0F, 17.5F)
          verticalLineToRelative(-3.755F)
          curveTo(7.134F, 14.536F, 8.513F, 15.0F, 10.0F, 15.0F)
          close()        
      }
    }
    return _ribbonStar20!!
  }

private var _ribbonStar20: ImageVector? = null
