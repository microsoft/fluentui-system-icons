package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.VideoOff48: ImageVector
  get() {
    if (_videoOff48 != null) {
      return _videoOff48!!
    }
    _videoOff48 = fluentIcon(name = "Regular.VideoOff48", 48f) {
      materialPath {
          moveTo(33.48F, 35.248F)
          lineToRelative(8.386F, 8.386F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-37.5F, -37.5F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(3.386F, 3.385F)
          curveTo(5.543F, 10.483F, 4.0F, 12.687F, 4.0F, 15.25F)
          verticalLineToRelative(17.5F)
          curveTo(4.0F, 36.202F, 6.798F, 39.0F, 10.25F, 39.0F)
          horizontalLineToRelative(17.5F)
          curveToRelative(2.564F, 0.0F, 4.767F, -1.543F, 5.73F, -3.752F)
          close()
          moveToRelative(-2.011F, -2.011F)
          curveToRelative(-0.239F, 1.84F, -1.813F, 3.263F, -3.719F, 3.263F)
          horizontalLineToRelative(-17.5F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineToRelative(-17.5F)
          curveToRelative(0.0F, -1.906F, 1.422F, -3.48F, 3.264F, -3.719F)
          lineToRelative(21.705F, 21.705F)
          close()
          moveTo(31.5F, 15.25F)
          verticalLineToRelative(10.947F)
          lineToRelative(9.16F, 9.16F)
          curveToRelative(1.546F, 0.56F, 3.34F, -0.558F, 3.34F, -2.36F)
          verticalLineTo(15.003F)
          curveToRelative(0.0F, -2.082F, -2.397F, -3.252F, -4.039F, -1.97F)
          lineTo(34.0F, 17.688F)
          verticalLineTo(15.25F)
          curveTo(34.0F, 11.798F, 31.202F, 9.0F, 27.75F, 9.0F)
          horizontalLineTo(14.303F)
          lineToRelative(2.5F, 2.5F)
          horizontalLineTo(27.75F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          close()
          moveToRelative(2.5F, 5.61F)
          lineToRelative(7.5F, -5.858F)
          verticalLineToRelative(17.995F)
          lineTo(34.0F, 27.14F)
          verticalLineToRelative(-6.28F)
          close()        
      }
    }
    return _videoOff48!!
  }

private var _videoOff48: ImageVector? = null
