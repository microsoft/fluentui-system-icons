package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Ribbon24: ImageVector
  get() {
    if (_ribbon24 != null) {
      return _ribbon24!!
    }
    _ribbon24 = fluentIcon(name = "Filled.Ribbon24", 24f) {
      materialPath {
          moveTo(17.002F, 15.244F)
          lineTo(17.0F, 21.245F)
          curveToRelative(0.0F, 0.608F, -0.685F, 0.963F, -1.182F, 0.613F)
          lineTo(12.0F, 19.171F)
          lineToRelative(-3.817F, 2.687F)
          curveToRelative(-0.496F, 0.35F, -1.181F, -0.005F, -1.181F, -0.613F)
          lineToRelative(-0.002F, -6.0F)
          curveTo(8.37F, 16.344F, 10.108F, 17.0F, 12.0F, 17.0F)
          curveToRelative(1.893F, 0.0F, 3.632F, -0.657F, 5.002F, -1.756F)
          close()
          moveTo(12.0F, 2.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          close()        
      }
    }
    return _ribbon24!!
  }

private var _ribbon24: ImageVector? = null
