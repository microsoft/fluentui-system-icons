package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUndo20: ImageVector
  get() {
    if (_arrowUndo20 != null) {
      return _arrowUndo20!!
    }
    _arrowUndo20 = fluentIcon(name = "Filled.ArrowUndo20", 20f) {
      materialPath {
          moveTo(6.862F, 6.5F)
          horizontalLineTo(9.25F)
          curveTo(9.664F, 6.5F, 10.0F, 6.836F, 10.0F, 7.25F)
          reflectiveCurveTo(9.664F, 8.0F, 9.25F, 8.0F)
          horizontalLineToRelative(-4.4F)
          curveTo(4.38F, 8.0F, 4.0F, 7.62F, 4.0F, 7.15F)
          verticalLineToRelative(-4.4F)
          curveTo(4.0F, 2.336F, 4.336F, 2.0F, 4.75F, 2.0F)
          reflectiveCurveTo(5.5F, 2.336F, 5.5F, 2.75F)
          verticalLineToRelative(2.947F)
          lineToRelative(3.059F, -2.66F)
          curveToRelative(2.188F, -1.901F, 5.504F, -1.67F, 7.406F, 0.519F)
          curveToRelative(1.902F, 2.188F, 1.67F, 5.504F, -0.518F, 7.406F)
          lineToRelative(-8.171F, 7.104F)
          curveToRelative(-0.313F, 0.272F, -0.787F, 0.239F, -1.059F, -0.074F)
          curveToRelative(-0.271F, -0.313F, -0.238F, -0.786F, 0.074F, -1.058F)
          lineToRelative(8.172F, -7.104F)
          curveToRelative(1.563F, -1.358F, 1.729F, -3.727F, 0.37F, -5.29F)
          curveToRelative(-1.358F, -1.563F, -3.727F, -1.729F, -5.29F, -0.37F)
          lineTo(6.863F, 6.5F)
          close()        
      }
    }
    return _arrowUndo20!!
  }

private var _arrowUndo20: ImageVector? = null
