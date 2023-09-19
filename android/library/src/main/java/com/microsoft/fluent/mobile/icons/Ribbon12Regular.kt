package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Ribbon12: ImageVector
  get() {
    if (_ribbon12 != null) {
      return _ribbon12!!
    }
    _ribbon12 = fluentIcon(name = "Regular.Ribbon12", 12f) {
      materialPath {
          moveTo(3.5F, 4.5F)
          curveTo(3.5F, 3.12F, 4.62F, 2.0F, 6.0F, 2.0F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveTo(7.38F, 7.0F, 6.0F, 7.0F)
          reflectiveCurveTo(3.5F, 5.88F, 3.5F, 4.5F)
          close()
          moveTo(6.0F, 1.0F)
          curveTo(4.067F, 1.0F, 2.5F, 2.567F, 2.5F, 4.5F)
          curveToRelative(0.0F, 1.19F, 0.593F, 2.24F, 1.5F, 2.873F)
          verticalLineTo(10.5F)
          curveToRelative(0.0F, 0.184F, 0.101F, 0.354F, 0.264F, 0.44F)
          curveToRelative(0.163F, 0.088F, 0.36F, 0.078F, 0.513F, -0.024F)
          lineTo(6.0F, 10.101F)
          lineToRelative(1.223F, 0.815F)
          curveToRelative(0.153F, 0.102F, 0.35F, 0.112F, 0.513F, 0.025F)
          curveTo(7.899F, 10.854F, 8.0F, 10.684F, 8.0F, 10.5F)
          verticalLineTo(7.373F)
          curveTo(8.907F, 6.74F, 9.5F, 5.689F, 9.5F, 4.5F)
          curveTo(9.5F, 2.567F, 7.933F, 1.0F, 6.0F, 1.0F)
          close()
          moveToRelative(1.0F, 6.855F)
          verticalLineToRelative(1.71F)
          lineToRelative(-0.723F, -0.48F)
          curveToRelative(-0.168F, -0.112F, -0.386F, -0.112F, -0.554F, 0.0F)
          lineTo(5.0F, 9.566F)
          verticalLineToRelative(-1.71F)
          curveTo(5.317F, 7.948F, 5.652F, 8.0F, 6.0F, 8.0F)
          reflectiveCurveToRelative(0.683F, -0.05F, 1.0F, -0.145F)
          close()        
      }
    }
    return _ribbon12!!
  }

private var _ribbon12: ImageVector? = null
