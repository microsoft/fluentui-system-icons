package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlagClock32: ImageVector
  get() {
    if (_flagClock32 != null) {
      return _flagClock32!!
    }
    _flagClock32 = fluentIcon(name = "Regular.FlagClock32", 32f) {
      materialPath {
          moveTo(5.0F, 4.5F)
          curveTo(5.0F, 3.672F, 5.672F, 3.0F, 6.5F, 3.0F)
          horizontalLineTo(28.0F)
          curveToRelative(0.379F, 0.0F, 0.725F, 0.214F, 0.894F, 0.553F)
          curveToRelative(0.17F, 0.339F, 0.133F, 0.744F, -0.094F, 1.047F)
          lineTo(23.25F, 12.0F)
          lineToRelative(1.65F, 2.201F)
          curveTo(24.289F, 14.07F, 23.653F, 14.0F, 23.0F, 14.0F)
          curveToRelative(-0.245F, 0.0F, -0.488F, 0.01F, -0.728F, 0.029F)
          lineTo(21.2F, 12.6F)
          curveToRelative(-0.267F, -0.356F, -0.267F, -0.844F, 0.0F, -1.2F)
          lineTo(26.0F, 5.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(14.0F)
          horizontalLineToRelative(7.935F)
          curveToRelative(-0.312F, 0.628F, -0.553F, 1.299F, -0.712F, 2.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.5F)
          close()
          moveToRelative(18.0F, 26.0F)
          curveToRelative(-4.142F, 0.0F, -7.5F, -3.358F, -7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, 3.358F, -7.5F, 7.5F, -7.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          close()
          moveTo(22.75F, 18.0F)
          curveTo(22.336F, 18.0F, 22.0F, 18.336F, 22.0F, 18.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(23.5F)
          verticalLineToRelative(-3.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()        
      }
    }
    return _flagClock32!!
  }

private var _flagClock32: ImageVector? = null
