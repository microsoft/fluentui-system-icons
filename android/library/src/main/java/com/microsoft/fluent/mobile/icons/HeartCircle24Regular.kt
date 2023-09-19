package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.HeartCircle24: ImageVector
  get() {
    if (_heartCircle24 != null) {
      return _heartCircle24!!
    }
    _heartCircle24 = fluentIcon(name = "Regular.HeartCircle24", 24f) {
      materialPath {
          moveTo(11.696F, 16.856F)
          lineTo(7.59F, 12.064F)
          curveTo(6.815F, 11.159F, 6.8F, 9.828F, 7.554F, 8.905F)
          curveToRelative(0.912F, -1.116F, 2.584F, -1.212F, 3.619F, -0.208F)
          lineTo(12.0F, 9.5F)
          lineToRelative(0.827F, -0.803F)
          curveToRelative(1.034F, -1.004F, 2.707F, -0.908F, 3.62F, 0.209F)
          curveToRelative(0.754F, 0.922F, 0.738F, 2.253F, -0.037F, 3.159F)
          lineToRelative(-4.106F, 4.79F)
          curveToRelative(-0.16F, 0.187F, -0.448F, 0.187F, -0.608F, 0.0F)
          close()
          moveTo(22.0F, 12.0F)
          curveToRelative(0.0F, 5.523F, -4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          close()
          moveToRelative(-1.5F, 0.0F)
          curveToRelative(0.0F, -4.694F, -3.806F, -8.5F, -8.5F, -8.5F)
          reflectiveCurveTo(3.5F, 7.306F, 3.5F, 12.0F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          close()        
      }
    }
    return _heartCircle24!!
  }

private var _heartCircle24: ImageVector? = null
