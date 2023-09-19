package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Warning20: ImageVector
  get() {
    if (_warning20 != null) {
      return _warning20!!
    }
    _warning20 = fluentIcon(name = "Regular.Warning20", 20f) {
      materialPath {
          moveTo(9.562F, 3.262F)
          curveToRelative(0.19F, -0.35F, 0.69F, -0.35F, 0.88F, 0.0F)
          lineToRelative(6.5F, 12.0F)
          curveToRelative(0.18F, 0.334F, -0.061F, 0.739F, -0.44F, 0.739F)
          horizontalLineTo(3.5F)
          curveToRelative(-0.379F, 0.0F, -0.62F, -0.405F, -0.44F, -0.738F)
          lineTo(9.563F, 3.262F)
          close()
          moveToRelative(1.758F, -0.476F)
          curveToRelative(-0.567F, -1.048F, -2.07F, -1.048F, -2.637F, 0.0F)
          lineToRelative(-6.502F, 12.0F)
          curveToRelative(-0.542F, 1.0F, 0.182F, 2.215F, 1.318F, 2.215F)
          horizontalLineToRelative(13.003F)
          curveToRelative(1.137F, 0.0F, 1.86F, -1.215F, 1.319F, -2.215F)
          lineToRelative(-6.5F, -12.0F)
          close()
          moveTo(10.5F, 7.5F)
          curveTo(10.5F, 7.224F, 10.276F, 7.0F, 10.0F, 7.0F)
          reflectiveCurveTo(9.5F, 7.224F, 9.5F, 7.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-4.0F)
          close()
          moveToRelative(0.25F, 6.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(9.586F, 13.0F, 10.0F, 13.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          close()        
      }
    }
    return _warning20!!
  }

private var _warning20: ImageVector? = null
