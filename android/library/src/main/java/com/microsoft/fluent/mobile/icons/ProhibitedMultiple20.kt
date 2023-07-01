package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ProhibitedMultiple20: ImageVector
  get() {
    if (_prohibitedMultiple20 != null) {
      return _prohibitedMultiple20!!
    }
    _prohibitedMultiple20 = fluentIcon(name = "Filled.ProhibitedMultiple20", 20f) {
      materialPath {
          moveTo(9.0F, 2.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          close()
          moveToRelative(3.323F, 2.617F)
          curveTo(11.4F, 3.916F, 10.248F, 3.5F, 9.0F, 3.5F)
          curveTo(5.962F, 3.5F, 3.5F, 5.962F, 3.5F, 9.0F)
          curveToRelative(0.0F, 1.248F, 0.416F, 2.4F, 1.117F, 3.323F)
          lineToRelative(7.706F, -7.706F)
          close()
          moveToRelative(1.06F, 1.06F)
          lineToRelative(-7.706F, 7.706F)
          curveTo(6.6F, 14.084F, 7.752F, 14.5F, 9.0F, 14.5F)
          curveToRelative(3.038F, 0.0F, 5.5F, -2.462F, 5.5F, -5.5F)
          curveToRelative(0.0F, -1.248F, -0.416F, -2.4F, -1.117F, -3.323F)
          close()
          moveTo(9.0F, 17.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          curveToRelative(0.0F, -0.688F, -0.087F, -1.356F, -0.25F, -1.994F)
          curveTo(17.538F, 8.139F, 18.0F, 9.516F, 18.0F, 11.0F)
          curveToRelative(0.0F, 3.866F, -3.134F, 7.0F, -7.0F, 7.0F)
          curveToRelative(-1.485F, 0.0F, -2.861F, -0.462F, -3.994F, -1.25F)
          curveTo(7.644F, 16.913F, 8.312F, 17.0F, 9.0F, 17.0F)
          close()        
      }
    }
    return _prohibitedMultiple20!!
  }

private var _prohibitedMultiple20: ImageVector? = null
