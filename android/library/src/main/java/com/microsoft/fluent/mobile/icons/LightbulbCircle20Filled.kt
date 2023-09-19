package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LightbulbCircle20: ImageVector
  get() {
    if (_lightbulbCircle20 != null) {
      return _lightbulbCircle20!!
    }
    _lightbulbCircle20 = fluentIcon(name = "Filled.LightbulbCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveTo(6.5F, 8.5F)
          curveTo(6.5F, 6.567F, 8.067F, 5.0F, 10.0F, 5.0F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          curveToRelative(0.0F, 1.151F, -0.556F, 2.173F, -1.413F, 2.81F)
          curveToRelative(-0.183F, 0.136F, -0.284F, 0.289F, -0.31F, 0.43F)
          lineTo(11.726F, 12.0F)
          horizontalLineTo(8.273F)
          lineToRelative(-0.05F, -0.26F)
          curveToRelative(-0.026F, -0.141F, -0.127F, -0.294F, -0.31F, -0.43F)
          curveTo(7.056F, 10.673F, 6.5F, 9.65F, 6.5F, 8.5F)
          close()
          moveToRelative(2.182F, 5.684F)
          lineTo(8.46F, 13.0F)
          horizontalLineToRelative(3.08F)
          lineToRelative(-0.222F, 1.184F)
          curveTo(11.229F, 14.657F, 10.816F, 15.0F, 10.335F, 15.0F)
          horizontalLineToRelative(-0.67F)
          curveToRelative(-0.481F, 0.0F, -0.894F, -0.343F, -0.983F, -0.816F)
          close()        
      }
    }
    return _lightbulbCircle20!!
  }

private var _lightbulbCircle20: ImageVector? = null
