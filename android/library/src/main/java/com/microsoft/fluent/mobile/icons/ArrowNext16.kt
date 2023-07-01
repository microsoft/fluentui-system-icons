package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowNext16: ImageVector
  get() {
    if (_arrowNext16 != null) {
      return _arrowNext16!!
    }
    _arrowNext16 = fluentIcon(name = "Regular.ArrowNext16", 16f) {
      materialPath {
          moveTo(3.647F, 3.853F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(7.793F, 8.0F)
          lineTo(3.646F, 3.854F)
          close()
          moveTo(12.0F, 3.5F)
          curveTo(12.0F, 3.224F, 11.776F, 3.0F, 11.5F, 3.0F)
          reflectiveCurveTo(11.0F, 3.224F, 11.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-9.0F)
          close()        
      }
    }
    return _arrowNext16!!
  }

private var _arrowNext16: ImageVector? = null
