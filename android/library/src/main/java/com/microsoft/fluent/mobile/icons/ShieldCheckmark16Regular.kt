package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ShieldCheckmark16: ImageVector
  get() {
    if (_shieldCheckmark16 != null) {
      return _shieldCheckmark16!!
    }
    _shieldCheckmark16 = fluentIcon(name = "Regular.ShieldCheckmark16", 16f) {
      materialPath {
          moveTo(7.647F, 2.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveTo(9.595F, 3.39F, 10.969F, 4.0F, 12.5F, 4.0F)
          curveTo(12.776F, 4.0F, 13.0F, 4.224F, 13.0F, 4.5F)
          verticalLineToRelative(1.1F)
          curveToRelative(-0.317F, -0.162F, -0.651F, -0.294F, -1.0F, -0.393F)
          verticalLineTo(4.981F)
          curveTo(10.52F, 4.87F, 9.185F, 4.255F, 8.0F, 3.19F)
          curveTo(6.814F, 4.255F, 5.48F, 4.87F, 4.0F, 4.981F)
          verticalLineToRelative(2.52F)
          curveToRelative(0.0F, 1.431F, 0.361F, 2.56F, 1.017F, 3.44F)
          curveToRelative(0.053F, 0.66F, 0.222F, 1.288F, 0.487F, 1.862F)
          curveTo(3.844F, 11.59F, 3.0F, 9.81F, 3.0F, 7.502F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 4.224F, 3.224F, 4.0F, 3.5F, 4.0F)
          curveToRelative(1.53F, 0.0F, 2.904F, -0.611F, 4.147F, -1.854F)
          close()
          moveTo(15.0F, 10.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 12.985F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(15.0F, 8.015F, 15.0F, 10.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(9.5F, 11.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _shieldCheckmark16!!
  }

private var _shieldCheckmark16: ImageVector? = null
