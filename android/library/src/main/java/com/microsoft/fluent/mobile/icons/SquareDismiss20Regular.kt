package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SquareDismiss20: ImageVector
  get() {
    if (_squareDismiss20 != null) {
      return _squareDismiss20!!
    }
    _squareDismiss20 = fluentIcon(name = "Regular.SquareDismiss20", 20f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(3.6F)
          curveToRelative(-0.162F, -0.317F, -0.294F, -0.651F, -0.393F, -1.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(3.207F)
          curveToRelative(0.349F, 0.099F, 0.683F, 0.23F, 1.0F, 0.393F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(8.5F, 16.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(16.985F, 10.0F, 14.5F, 10.0F)
          reflectiveCurveTo(10.0F, 12.015F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          close()
          moveToRelative(1.854F, -6.354F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(15.207F, 14.5F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(14.5F, 15.207F)
          lineToRelative(-1.146F, 1.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(1.147F, -1.146F)
          lineToRelative(-1.147F, -1.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(1.146F, 1.147F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _squareDismiss20!!
  }

private var _squareDismiss20: ImageVector? = null
