package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LightbulbCircle24: ImageVector
  get() {
    if (_lightbulbCircle24 != null) {
      return _lightbulbCircle24!!
    }
    _lightbulbCircle24 = fluentIcon(name = "Filled.LightbulbCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(2.481F, 15.0F)
          horizontalLineTo(9.519F)
          lineToRelative(0.103F, 0.454F)
          lineToRelative(0.043F, 0.152F)
          lineToRelative(0.057F, 0.143F)
          curveToRelative(0.288F, 0.646F, 0.902F, 1.05F, 1.587F, 1.05F)
          horizontalLineToRelative(1.382F)
          lineToRelative(0.156F, -0.009F)
          lineToRelative(0.15F, -0.023F)
          lineToRelative(0.147F, -0.035F)
          curveToRelative(0.622F, -0.174F, 1.09F, -0.656F, 1.233F, -1.276F)
          lineTo(14.481F, 17.0F)
          close()
          moveTo(12.0F, 5.202F)
          curveToRelative(-2.761F, 0.0F, -5.0F, 2.239F, -5.0F, 5.0F)
          lineToRelative(0.008F, 0.271F)
          lineToRelative(0.02F, 0.256F)
          lineToRelative(0.034F, 0.252F)
          curveToRelative(0.186F, 1.168F, 0.77F, 2.215F, 1.64F, 2.978F)
          lineToRelative(0.154F, 0.129F)
          lineToRelative(0.321F, 1.412F)
          horizontalLineToRelative(5.644F)
          lineToRelative(0.32F, -1.41F)
          lineToRelative(0.163F, -0.136F)
          curveToRelative(1.01F, -0.895F, 1.621F, -2.144F, 1.69F, -3.497F)
          lineTo(17.0F, 10.202F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          close()        
      }
    }
    return _lightbulbCircle24!!
  }

private var _lightbulbCircle24: ImageVector? = null
