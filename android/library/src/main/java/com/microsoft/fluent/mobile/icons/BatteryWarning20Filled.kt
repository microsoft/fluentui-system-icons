package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BatteryWarning20: ImageVector
  get() {
    if (_batteryWarning20 != null) {
      return _batteryWarning20!!
    }
    _batteryWarning20 = fluentIcon(name = "Filled.BatteryWarning20", 20f) {
      materialPath {
          moveTo(2.0F, 7.5F)
          curveTo(2.0F, 6.12F, 3.12F, 5.0F, 4.5F, 5.0F)
          horizontalLineToRelative(9.0F)
          curveTo(14.88F, 5.0F, 16.0F, 6.12F, 16.0F, 7.5F)
          verticalLineToRelative(0.833F)
          lineToRelative(1.167F, 0.003F)
          curveToRelative(0.151F, 0.0F, 0.294F, 0.04F, 0.416F, 0.111F)
          curveTo(17.833F, 8.591F, 18.0F, 8.861F, 18.0F, 9.17F)
          verticalLineToRelative(1.667F)
          curveToRelative(0.0F, 0.308F, -0.168F, 0.577F, -0.417F, 0.721F)
          curveToRelative(-0.122F, 0.071F, -0.265F, 0.112F, -0.416F, 0.112F)
          lineTo(16.0F, 11.667F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-2.26F)
          lineTo(8.292F, 9.106F)
          curveTo(7.555F, 7.631F, 5.45F, 7.631F, 4.713F, 9.107F)
          lineToRelative(-2.346F, 4.698F)
          curveTo(2.134F, 13.425F, 2.0F, 12.978F, 2.0F, 12.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(3.603F, 2.054F)
          lineToRelative(-3.496F, 6.998F)
          curveTo(1.774F, 17.217F, 2.258F, 18.0F, 3.002F, 18.0F)
          horizontalLineToRelative(6.996F)
          curveToRelative(0.744F, 0.0F, 1.228F, -0.783F, 0.895F, -1.448F)
          lineToRelative(-3.5F, -6.999F)
          curveToRelative(-0.368F, -0.738F, -1.421F, -0.737F, -1.79F, 0.0F)
          close()
          moveToRelative(1.395F, 1.941F)
          verticalLineToRelative(3.002F)
          curveToRelative(0.0F, 0.277F, -0.224F, 0.5F, -0.5F, 0.5F)
          curveToRelative(-0.277F, 0.0F, -0.5F, -0.223F, -0.5F, -0.5F)
          verticalLineToRelative(-3.002F)
          curveToRelative(0.0F, -0.276F, 0.223F, -0.5F, 0.5F, -0.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          close()
          moveTo(6.498F, 17.0F)
          curveToRelative(-0.277F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveToRelative(0.223F, -0.5F, 0.5F, -0.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(6.774F, 17.0F, 6.498F, 17.0F)
          close()        
      }
    }
    return _batteryWarning20!!
  }

private var _batteryWarning20: ImageVector? = null
