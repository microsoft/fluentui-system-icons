package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUndo16: ImageVector
  get() {
    if (_arrowUndo16 != null) {
      return _arrowUndo16!!
    }
    _arrowUndo16 = fluentIcon(name = "Filled.ArrowUndo16", 16f) {
      materialPath {
          moveTo(3.0F, 2.75F)
          curveTo(3.0F, 2.336F, 3.336F, 2.0F, 3.75F, 2.0F)
          reflectiveCurveTo(4.5F, 2.336F, 4.5F, 2.75F)
          verticalLineToRelative(3.095F)
          lineToRelative(2.673F, -2.673F)
          curveToRelative(1.562F, -1.563F, 4.095F, -1.563F, 5.657F, 0.0F)
          curveToRelative(1.562F, 1.562F, 1.562F, 4.094F, 0.0F, 5.656F)
          lineToRelative(-4.95F, 4.95F)
          curveToRelative(-0.293F, 0.293F, -0.768F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.294F, -0.293F, -0.294F, -0.767F, 0.0F, -1.06F)
          lineToRelative(4.95F, -4.95F)
          curveToRelative(0.976F, -0.976F, 0.976F, -2.56F, 0.0F, -3.536F)
          curveToRelative(-0.977F, -0.976F, -2.56F, -0.976F, -3.536F, 0.0F)
          lineTo(5.966F, 6.5F)
          horizontalLineTo(8.25F)
          curveTo(8.664F, 6.5F, 9.0F, 6.836F, 9.0F, 7.25F)
          reflectiveCurveTo(8.664F, 8.0F, 8.25F, 8.0F)
          horizontalLineToRelative(-4.4F)
          curveTo(3.38F, 8.0F, 3.0F, 7.62F, 3.0F, 7.15F)
          verticalLineToRelative(-4.4F)
          close()        
      }
    }
    return _arrowUndo16!!
  }

private var _arrowUndo16: ImageVector? = null
