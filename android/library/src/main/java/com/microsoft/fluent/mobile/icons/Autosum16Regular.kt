package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Autosum16: ImageVector
  get() {
    if (_autosum16 != null) {
      return _autosum16!!
    }
    _autosum16 = fluentIcon(name = "Regular.Autosum16", 16f) {
      materialPath {
          moveTo(2.54F, 2.304F)
          curveTo(2.62F, 2.12F, 2.8F, 2.0F, 3.0F, 2.0F)
          horizontalLineToRelative(9.5F)
          curveTo(12.776F, 2.0F, 13.0F, 2.224F, 13.0F, 2.5F)
          reflectiveCurveTo(12.776F, 3.0F, 12.5F, 3.0F)
          horizontalLineTo(4.171F)
          lineToRelative(4.074F, 4.253F)
          curveToRelative(0.176F, 0.183F, 0.186F, 0.47F, 0.024F, 0.665F)
          lineTo(4.063F, 13.0F)
          horizontalLineTo(12.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.776F, 14.0F, 12.5F, 14.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.194F, 0.0F, -0.37F, -0.112F, -0.452F, -0.287F)
          curveToRelative(-0.083F, -0.175F, -0.057F, -0.383F, 0.067F, -0.532F)
          lineToRelative(4.6F, -5.558F)
          lineToRelative(-4.576F, -4.777F)
          curveTo(2.5F, 2.7F, 2.462F, 2.488F, 2.54F, 2.304F)
          close()        
      }
    }
    return _autosum16!!
  }

private var _autosum16: ImageVector? = null
