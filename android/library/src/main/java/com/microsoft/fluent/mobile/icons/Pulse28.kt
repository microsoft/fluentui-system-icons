package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pulse28: ImageVector
  get() {
    if (_pulse28 != null) {
      return _pulse28!!
    }
    _pulse28 = fluentIcon(name = "Regular.Pulse28", 28f) {
      materialPath {
          moveTo(10.023F, 3.0F)
          curveToRelative(0.344F, 0.011F, 0.636F, 0.254F, 0.71F, 0.59F)
          lineToRelative(3.905F, 17.79F)
          lineToRelative(4.148F, -12.86F)
          curveToRelative(0.102F, -0.316F, 0.4F, -0.527F, 0.731F, -0.52F)
          curveToRelative(0.332F, 0.008F, 0.62F, 0.232F, 0.707F, 0.553F)
          lineToRelative(1.349F, 4.947F)
          horizontalLineToRelative(3.677F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(25.664F, 15.0F, 25.25F, 15.0F)
          horizontalLineTo(21.0F)
          curveToRelative(-0.338F, 0.0F, -0.635F, -0.226F, -0.724F, -0.553F)
          lineTo(19.44F, 11.38F)
          lineToRelative(-4.226F, 13.1F)
          curveToRelative(-0.104F, 0.323F, -0.412F, 0.535F, -0.75F, 0.52F)
          curveToRelative(-0.338F, -0.017F, -0.624F, -0.258F, -0.697F, -0.59F)
          lineTo(9.905F, 6.815F)
          lineTo(7.72F, 14.456F)
          curveTo(7.63F, 14.778F, 7.335F, 15.0F, 7.0F, 15.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 15.0F, 2.0F, 14.664F, 2.0F, 14.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(3.684F)
          lineTo(9.28F, 3.544F)
          curveTo(9.373F, 3.214F, 9.68F, 2.99F, 10.023F, 3.0F)
          close()        
      }
    }
    return _pulse28!!
  }

private var _pulse28: ImageVector? = null
