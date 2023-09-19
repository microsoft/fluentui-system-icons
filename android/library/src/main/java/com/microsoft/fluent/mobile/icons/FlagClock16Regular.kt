package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlagClock16: ImageVector
  get() {
    if (_flagClock16 != null) {
      return _flagClock16!!
    }
    _flagClock16 = fluentIcon(name = "Regular.FlagClock16", 16f) {
      materialPath {
          moveTo(4.0F, 9.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(8.028F)
          lineToRelative(-1.935F, 2.71F)
          curveTo(9.99F, 5.852F, 9.973F, 6.037F, 10.04F, 6.195F)
          curveToRelative(0.349F, -0.096F, 0.71F, -0.158F, 1.084F, -0.183F)
          lineTo(11.114F, 6.0F)
          lineToRelative(2.293F, -3.21F)
          curveTo(13.643F, 2.46F, 13.407F, 2.0F, 13.0F, 2.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 2.0F, 3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineToRelative(11.0F)
          curveTo(3.0F, 13.776F, 3.224F, 14.0F, 3.5F, 14.0F)
          reflectiveCurveTo(4.0F, 13.776F, 4.0F, 13.5F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(2.207F)
          curveTo(6.306F, 9.651F, 6.437F, 9.317F, 6.6F, 9.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(12.0F, 2.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(7.0F, 13.985F, 7.0F, 11.5F)
          reflectiveCurveTo(9.015F, 7.0F, 11.5F, 7.0F)
          reflectiveCurveTo(16.0F, 9.015F, 16.0F, 11.5F)
          close()
          moveTo(11.5F, 9.0F)
          curveTo(11.224F, 9.0F, 11.0F, 9.224F, 11.0F, 9.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.276F, 11.0F, 13.0F, 11.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(9.5F)
          curveTo(12.0F, 9.224F, 11.776F, 9.0F, 11.5F, 9.0F)
          close()        
      }
    }
    return _flagClock16!!
  }

private var _flagClock16: ImageVector? = null
