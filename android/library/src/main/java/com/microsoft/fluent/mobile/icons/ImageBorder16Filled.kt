package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageBorder16: ImageVector
  get() {
    if (_imageBorder16 != null) {
      return _imageBorder16!!
    }
    _imageBorder16 = fluentIcon(name = "Filled.ImageBorder16", 16f) {
      materialPath {
          moveTo(5.0F, 11.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(-0.296F)
          lineTo(9.202F, 9.498F)
          curveToRelative(-0.664F, -0.664F, -1.74F, -0.664F, -2.404F, 0.0F)
          lineTo(5.296F, 11.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(4.0F, -5.0F)
          curveTo(8.448F, 6.0F, 8.0F, 6.448F, 8.0F, 7.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-0.505F, 4.205F)
          lineTo(9.29F, 11.0F)
          horizontalLineTo(6.71F)
          lineToRelative(0.795F, -0.795F)
          curveToRelative(0.273F, -0.273F, 0.717F, -0.273F, 0.99F, 0.0F)
          close()
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(4.501F, 4.0F)
          curveTo(4.224F, 4.0F, 4.0F, 4.224F, 4.0F, 4.501F)
          verticalLineToRelative(6.998F)
          curveTo(4.0F, 11.776F, 4.224F, 12.0F, 4.501F, 12.0F)
          horizontalLineToRelative(6.998F)
          curveTo(11.776F, 12.0F, 12.0F, 11.776F, 12.0F, 11.499F)
          verticalLineTo(4.501F)
          curveTo(12.0F, 4.224F, 11.776F, 4.0F, 11.499F, 4.0F)
          horizontalLineTo(4.501F)
          close()        
      }
    }
    return _imageBorder16!!
  }

private var _imageBorder16: ImageVector? = null
