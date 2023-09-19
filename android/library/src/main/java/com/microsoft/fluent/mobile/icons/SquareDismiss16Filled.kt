package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquareDismiss16: ImageVector
  get() {
    if (_squareDismiss16 != null) {
      return _squareDismiss16!!
    }
    _squareDismiss16 = fluentIcon(name = "Filled.SquareDismiss16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(1.757F)
          curveTo(5.472F, 13.05F, 5.0F, 11.83F, 5.0F, 10.5F)
          curveTo(5.0F, 7.462F, 7.462F, 5.0F, 10.5F, 5.0F)
          curveToRelative(1.33F, 0.0F, 2.55F, 0.472F, 3.5F, 1.257F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(6.0F, 13.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(12.985F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(6.0F, 8.015F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 15.0F, 10.5F, 15.0F)
          close()
          moveToRelative(1.854F, -6.354F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(11.207F, 10.5F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(10.5F, 11.207F)
          lineToRelative(-1.146F, 1.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          lineTo(9.793F, 10.5F)
          lineTo(8.647F, 9.354F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.196F, 0.511F, -0.196F, 0.707F, 0.0F)
          lineTo(10.5F, 9.793F)
          lineToRelative(1.146F, -1.146F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          close()        
      }
    }
    return _squareDismiss16!!
  }

private var _squareDismiss16: ImageVector? = null
