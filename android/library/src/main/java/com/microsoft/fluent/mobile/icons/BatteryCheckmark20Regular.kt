package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BatteryCheckmark20: ImageVector
  get() {
    if (_batteryCheckmark20 != null) {
      return _batteryCheckmark20!!
    }
    _batteryCheckmark20 = fluentIcon(name = "Regular.BatteryCheckmark20", 20f) {
      materialPath {
          moveTo(13.5F, 5.0F)
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
          horizontalLineToRelative(-2.707F)
          curveToRelative(0.096F, -0.34F, 0.16F, -0.695F, 0.19F, -1.059F)
          horizontalLineToRelative(2.767F)
          curveToRelative(0.647F, 0.0F, 1.18F, -0.492F, 1.243F, -1.122F)
          lineTo(15.0F, 12.691F)
          verticalLineTo(7.196F)
          curveToRelative(0.0F, -0.647F, -0.492F, -1.18F, -1.122F, -1.244F)
          lineTo(13.75F, 5.946F)
          horizontalLineTo(4.5F)
          curveToRelative(-0.65F, 0.0F, -1.405F, 0.496F, -1.492F, 1.13F)
          lineTo(3.0F, 7.196F)
          verticalLineTo(8.6F)
          curveTo(2.642F, 8.783F, 2.307F, 9.004F, 2.0F, 9.257F)
          verticalLineTo(7.5F)
          curveTo(2.0F, 6.12F, 3.12F, 5.0F, 4.5F, 5.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveTo(10.0F, 13.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(1.0F, 15.985F, 1.0F, 13.5F)
          reflectiveCurveTo(3.015F, 9.0F, 5.5F, 9.0F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(4.5F, 14.293F)
          lineToRelative(-0.647F, -0.647F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _batteryCheckmark20!!
  }

private var _batteryCheckmark20: ImageVector? = null
