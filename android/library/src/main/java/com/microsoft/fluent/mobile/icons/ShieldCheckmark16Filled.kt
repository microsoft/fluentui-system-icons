package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShieldCheckmark16: ImageVector
  get() {
    if (_shieldCheckmark16 != null) {
      return _shieldCheckmark16!!
    }
    _shieldCheckmark16 = fluentIcon(name = "Filled.ShieldCheckmark16", 16f) {
      materialPath {
          moveTo(7.647F, 2.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveTo(9.595F, 3.39F, 10.969F, 4.0F, 12.5F, 4.0F)
          curveTo(12.776F, 4.0F, 13.0F, 4.224F, 13.0F, 4.5F)
          verticalLineToRelative(1.1F)
          curveTo(12.25F, 5.216F, 11.4F, 5.0F, 10.5F, 5.0F)
          curveTo(7.462F, 5.0F, 5.0F, 7.462F, 5.0F, 10.5F)
          curveToRelative(0.0F, 0.822F, 0.18F, 1.603F, 0.504F, 2.303F)
          curveTo(3.844F, 11.59F, 3.0F, 9.81F, 3.0F, 7.502F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 4.224F, 3.224F, 4.0F, 3.5F, 4.0F)
          curveToRelative(1.53F, 0.0F, 2.904F, -0.611F, 4.147F, -1.854F)
          close()
          moveTo(15.0F, 10.5F)
          curveTo(15.0F, 8.015F, 12.985F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(6.0F, 8.015F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 15.0F, 10.5F, 15.0F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.707F, 0.0F)
          lineToRelative(-1.0F, -1.0F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(9.5F, 11.293F)
          lineToRelative(2.646F, -2.646F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          close()        
      }
    }
    return _shieldCheckmark16!!
  }

private var _shieldCheckmark16: ImageVector? = null
