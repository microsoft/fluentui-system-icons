package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FStop20: ImageVector
  get() {
    if (_fStop20 != null) {
      return _fStop20!!
    }
    _fStop20 = fluentIcon(name = "Filled.FStop20", 20f) {
      materialPath {
          moveTo(11.08F, 5.681F)
          curveToRelative(0.28F, -1.629F, 1.995F, -2.58F, 3.525F, -1.955F)
          lineToRelative(0.361F, 0.148F)
          curveToRelative(0.384F, 0.157F, 0.821F, -0.027F, 0.978F, -0.41F)
          curveToRelative(0.157F, -0.384F, -0.027F, -0.822F, -0.41F, -0.978F)
          lineToRelative(-0.36F, -0.148F)
          curveToRelative(-2.419F, -0.99F, -5.131F, 0.515F, -5.572F, 3.09F)
          lineTo(8.991F, 9.0F)
          horizontalLineTo(5.75F)
          curveTo(5.336F, 9.0F, 5.0F, 9.335F, 5.0F, 9.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(2.984F)
          lineToRelative(-0.507F, 2.962F)
          curveToRelative(-0.31F, 1.813F, -2.363F, 2.73F, -3.92F, 1.751F)
          lineToRelative(-0.158F, -0.098F)
          curveTo(3.8F, 14.895F, 3.336F, 15.0F, 3.115F, 15.35F)
          curveTo(2.895F, 15.7F, 3.0F, 16.164F, 3.351F, 16.385F)
          lineToRelative(0.157F, 0.098F)
          curveToRelative(2.462F, 1.548F, 5.707F, 0.098F, 6.198F, -2.768F)
          lineToRelative(0.55F, -3.215F)
          horizontalLineToRelative(2.994F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          curveTo(14.0F, 9.335F, 13.664F, 9.0F, 13.25F, 9.0F)
          horizontalLineToRelative(-2.737F)
          lineToRelative(0.567F, -3.32F)
          close()        
      }
    }
    return _fStop20!!
  }

private var _fStop20: ImageVector? = null
