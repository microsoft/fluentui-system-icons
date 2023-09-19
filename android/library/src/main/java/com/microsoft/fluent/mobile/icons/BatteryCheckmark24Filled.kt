package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BatteryCheckmark24: ImageVector
  get() {
    if (_batteryCheckmark24 != null) {
      return _batteryCheckmark24!!
    }
    _batteryCheckmark24 = fluentIcon(name = "Filled.BatteryCheckmark24", 24f) {
      materialPath {
          moveTo(2.0F, 9.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.183F, 0.0F, 0.354F, 0.049F, 0.5F, 0.134F)
          curveTo(21.8F, 10.307F, 22.0F, 10.63F, 22.0F, 11.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.37F, -0.2F, 0.693F, -0.5F, 0.866F)
          curveTo(21.355F, 13.951F, 21.184F, 14.0F, 21.0F, 14.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineToRelative(-4.174F)
          curveTo(12.94F, 17.518F, 13.0F, 17.016F, 13.0F, 16.5F)
          curveToRelative(0.0F, -3.59F, -2.91F, -6.5F, -6.5F, -6.5F)
          curveToRelative(-1.747F, 0.0F, -3.332F, 0.689F, -4.5F, 1.81F)
          verticalLineTo(9.0F)
          close()
          moveToRelative(10.0F, 7.5F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          reflectiveCurveTo(1.0F, 19.538F, 1.0F, 16.5F)
          reflectiveCurveTo(3.462F, 11.0F, 6.5F, 11.0F)
          reflectiveCurveToRelative(5.5F, 2.462F, 5.5F, 5.5F)
          close()
          moveToRelative(-2.146F, -2.354F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineTo(5.5F, 17.793F)
          lineToRelative(-1.647F, -1.647F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _batteryCheckmark24!!
  }

private var _batteryCheckmark24: ImageVector? = null
