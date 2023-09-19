package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HeartCircle24: ImageVector
  get() {
    if (_heartCircle24 != null) {
      return _heartCircle24!!
    }
    _heartCircle24 = fluentIcon(name = "Filled.HeartCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(-0.304F, -5.144F)
          lineTo(7.59F, 12.064F)
          curveTo(6.815F, 11.159F, 6.8F, 9.828F, 7.553F, 8.905F)
          curveToRelative(0.913F, -1.116F, 2.585F, -1.212F, 3.62F, -0.208F)
          lineTo(12.0F, 9.5F)
          lineToRelative(0.827F, -0.803F)
          curveToRelative(1.034F, -1.004F, 2.707F, -0.908F, 3.62F, 0.208F)
          curveToRelative(0.754F, 0.923F, 0.738F, 2.254F, -0.037F, 3.16F)
          lineToRelative(-4.107F, 4.79F)
          curveToRelative(-0.16F, 0.187F, -0.447F, 0.187F, -0.607F, 0.0F)
          close()        
      }
    }
    return _heartCircle24!!
  }

private var _heartCircle24: ImageVector? = null
