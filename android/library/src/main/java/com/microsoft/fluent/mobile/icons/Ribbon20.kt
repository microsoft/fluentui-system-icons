package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Ribbon20: ImageVector
  get() {
    if (_ribbon20 != null) {
      return _ribbon20!!
    }
    _ribbon20 = fluentIcon(name = "Filled.Ribbon20", 20f) {
      materialPath {
          moveTo(16.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveToRelative(-6.0F, 7.0F)
          curveToRelative(1.487F, 0.0F, 2.866F, -0.464F, 4.0F, -1.255F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.187F, -0.105F, 0.359F, -0.271F, 0.444F)
          curveToRelative(-0.167F, 0.086F, -0.367F, 0.072F, -0.52F, -0.037F)
          lineTo(10.0F, 16.0F)
          lineToRelative(-3.21F, 1.907F)
          curveToRelative(-0.152F, 0.108F, -0.352F, 0.123F, -0.519F, 0.037F)
          curveTo(6.105F, 17.86F, 6.0F, 17.687F, 6.0F, 17.5F)
          verticalLineToRelative(-3.755F)
          curveTo(7.134F, 14.536F, 8.513F, 15.0F, 10.0F, 15.0F)
          close()        
      }
    }
    return _ribbon20!!
  }

private var _ribbon20: ImageVector? = null
