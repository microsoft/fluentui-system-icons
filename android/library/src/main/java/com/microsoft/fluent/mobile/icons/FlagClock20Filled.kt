package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlagClock20: ImageVector
  get() {
    if (_flagClock20 != null) {
      return _flagClock20!!
    }
    _flagClock20 = fluentIcon(name = "Filled.FlagClock20", 20f) {
      materialPath {
          moveTo(4.5F, 13.0F)
          horizontalLineToRelative(4.707F)
          curveToRelative(0.591F, -2.09F, 2.387F, -3.675F, 4.59F, -3.956F)
          lineTo(13.101F, 8.0F)
          lineToRelative(2.815F, -4.223F)
          curveTo(16.137F, 3.445F, 15.899F, 3.0F, 15.5F, 3.0F)
          horizontalLineTo(4.0F)
          curveTo(3.724F, 3.0F, 3.5F, 3.224F, 3.5F, 3.5F)
          verticalLineToRelative(14.0F)
          curveTo(3.5F, 17.776F, 3.724F, 18.0F, 4.0F, 18.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(13.0F)
          close()
          moveTo(19.0F, 14.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveTo(14.5F, 12.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(16.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.276F, 14.0F, 16.0F, 14.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(-1.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _flagClock20!!
  }

private var _flagClock20: ImageVector? = null
