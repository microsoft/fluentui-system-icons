package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlagClock32: ImageVector
  get() {
    if (_flagClock32 != null) {
      return _flagClock32!!
    }
    _flagClock32 = fluentIcon(name = "Filled.FlagClock32", 32f) {
      materialPath {
          moveTo(6.5F, 3.0F)
          curveTo(5.672F, 3.0F, 5.0F, 3.672F, 5.0F, 4.5F)
          verticalLineTo(28.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-7.0F)
          horizontalLineToRelative(7.223F)
          curveToRelative(0.91F, -4.008F, 4.494F, -7.0F, 8.777F, -7.0F)
          curveToRelative(0.652F, 0.0F, 1.288F, 0.07F, 1.9F, 0.201F)
          lineTo(23.25F, 12.0F)
          lineToRelative(5.55F, -7.4F)
          curveToRelative(0.227F, -0.303F, 0.264F, -0.708F, 0.094F, -1.047F)
          curveTo(28.725F, 3.214F, 28.38F, 3.0F, 28.0F, 3.0F)
          horizontalLineTo(6.5F)
          close()
          moveTo(23.0F, 30.5F)
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
