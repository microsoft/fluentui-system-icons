package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Alert32: ImageVector
  get() {
    if (_alert32 != null) {
      return _alert32!!
    }
    _alert32 = fluentIcon(name = "Regular.Alert32", 32f) {
      materialPath {
          moveTo(16.0F, 4.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          verticalLineToRelative(4.803F)
          lineToRelative(-1.929F, 4.826F)
          curveToRelative(-0.123F, 0.308F, -0.085F, 0.657F, 0.101F, 0.932F)
          curveTo(5.358F, 23.835F, 5.668F, 24.0F, 6.0F, 24.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.0F, 2.217F, 1.783F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.783F, 4.0F, -4.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.332F, 0.0F, 0.642F, -0.165F, 0.828F, -0.44F)
          curveToRelative(0.186F, -0.274F, 0.224F, -0.623F, 0.1F, -0.931F)
          lineTo(25.0F, 17.803F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, -4.97F, -4.03F, -9.0F, -9.0F, -9.0F)
          close()
          moveToRelative(2.0F, 20.0F)
          curveToRelative(0.0F, 1.112F, -0.888F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.888F, -2.0F, -2.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveTo(9.0F, 13.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          verticalLineToRelative(4.995F)
          curveToRelative(0.0F, 0.127F, 0.024F, 0.253F, 0.071F, 0.371F)
          lineTo(24.523F, 22.0F)
          horizontalLineTo(7.477F)
          lineToRelative(1.452F, -3.634F)
          curveTo(8.976F, 18.248F, 9.0F, 18.122F, 9.0F, 17.996F)
          verticalLineTo(13.0F)
          close()        
      }
    }
    return _alert32!!
  }

private var _alert32: ImageVector? = null
