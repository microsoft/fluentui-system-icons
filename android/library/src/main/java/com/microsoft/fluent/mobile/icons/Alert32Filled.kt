package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Alert32: ImageVector
  get() {
    if (_alert32 != null) {
      return _alert32!!
    }
    _alert32 = fluentIcon(name = "Filled.Alert32", 32f) {
      materialPath {
          moveTo(7.0F, 13.0F)
          curveToRelative(0.0F, -4.97F, 4.03F, -9.0F, 9.0F, -9.0F)
          reflectiveCurveToRelative(9.0F, 4.03F, 9.0F, 9.0F)
          verticalLineToRelative(3.807F)
          lineToRelative(1.928F, 4.822F)
          curveToRelative(0.124F, 0.308F, 0.086F, 0.657F, -0.1F, 0.932F)
          curveTo(26.642F, 22.835F, 26.332F, 23.0F, 26.0F, 23.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.332F, 0.0F, -0.642F, -0.165F, -0.828F, -0.44F)
          curveToRelative(-0.186F, -0.274F, -0.224F, -0.623F, -0.1F, -0.931F)
          lineTo(7.0F, 16.807F)
          verticalLineTo(13.0F)
          close()
          moveToRelative(5.125F, 12.0F)
          curveToRelative(0.441F, 1.73F, 2.004F, 3.0F, 3.875F, 3.0F)
          reflectiveCurveToRelative(3.433F, -1.27F, 3.875F, -3.0F)
          horizontalLineToRelative(-7.75F)
          close()        
      }
    }
    return _alert32!!
  }

private var _alert32: ImageVector? = null
