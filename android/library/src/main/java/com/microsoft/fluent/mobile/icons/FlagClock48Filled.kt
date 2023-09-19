package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlagClock48: ImageVector
  get() {
    if (_flagClock48 != null) {
      return _flagClock48!!
    }
    _flagClock48 = fluentIcon(name = "Filled.FlagClock48", 48f) {
      materialPath {
          moveTo(8.75F, 6.0F)
          curveTo(8.06F, 6.0F, 7.5F, 6.56F, 7.5F, 7.25F)
          verticalLineToRelative(35.5F)
          curveTo(7.5F, 43.44F, 8.06F, 44.0F, 8.75F, 44.0F)
          reflectiveCurveTo(10.0F, 43.44F, 10.0F, 42.75F)
          verticalLineTo(33.0F)
          horizontalLineToRelative(12.153F)
          curveTo(23.115F, 26.77F, 28.5F, 22.0F, 35.0F, 22.0F)
          curveToRelative(0.218F, 0.0F, 0.434F, 0.005F, 0.65F, 0.016F)
          lineTo(33.8F, 19.5F)
          lineToRelative(8.456F, -11.51F)
          curveToRelative(0.28F, -0.38F, 0.321F, -0.884F, 0.108F, -1.304F)
          curveTo(42.152F, 6.264F, 41.721F, 6.0F, 41.25F, 6.0F)
          horizontalLineTo(8.75F)
          close()
          moveTo(46.0F, 35.0F)
          curveToRelative(0.0F, 6.075F, -4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveToRelative(-11.0F, -4.925F, -11.0F, -11.0F)
          reflectiveCurveToRelative(4.925F, -11.0F, 11.0F, -11.0F)
          reflectiveCurveToRelative(11.0F, 4.925F, 11.0F, 11.0F)
          close()
          moveToRelative(-5.0F, 0.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.265F, 0.105F, 0.52F, 0.293F, 0.707F)
          curveTo(34.48F, 35.895F, 34.735F, 36.0F, 35.0F, 36.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          close()        
      }
    }
    return _flagClock48!!
  }

private var _flagClock48: ImageVector? = null
