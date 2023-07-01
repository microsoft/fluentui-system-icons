package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pulse24: ImageVector
  get() {
    if (_pulse24 != null) {
      return _pulse24!!
    }
    _pulse24 = fluentIcon(name = "Regular.Pulse24", 24f) {
      materialPath {
          moveTo(8.462F, 6.81F)
          lineToRelative(3.284F, 13.616F)
          curveToRelative(0.178F, 0.737F, 1.211F, 0.775F, 1.443F, 0.054F)
          lineToRelative(3.257F, -10.123F)
          lineToRelative(0.586F, 2.096F)
          curveToRelative(0.09F, 0.324F, 0.386F, 0.548F, 0.722F, 0.548F)
          horizontalLineToRelative(3.494F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-2.925F)
          lineToRelative(-1.105F, -3.95F)
          curveToRelative(-0.2F, -0.717F, -1.208F, -0.736F, -1.436F, -0.028F)
          lineToRelative(-3.204F, 9.957F)
          lineTo(9.226F, 3.574F)
          curveTo(9.043F, 2.817F, 7.97F, 2.805F, 7.771F, 3.558F)
          lineTo(5.67F, 11.501F)
          horizontalLineTo(2.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.496F)
          curveToRelative(0.34F, 0.0F, 0.638F, -0.229F, 0.725F, -0.558F)
          lineTo(8.462F, 6.81F)
          close()        
      }
    }
    return _pulse24!!
  }

private var _pulse24: ImageVector? = null
