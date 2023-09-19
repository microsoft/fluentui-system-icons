package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRedo16: ImageVector
  get() {
    if (_arrowRedo16 != null) {
      return _arrowRedo16!!
    }
    _arrowRedo16 = fluentIcon(name = "Filled.ArrowRedo16", 16f) {
      materialPath {
          moveTo(13.002F, 2.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          curveToRelative(-0.415F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(3.095F)
          lineTo(8.828F, 3.172F)
          curveToRelative(-1.562F, -1.563F, -4.094F, -1.563F, -5.656F, 0.0F)
          curveToRelative(-1.563F, 1.562F, -1.563F, 4.094F, 0.0F, 5.656F)
          lineToRelative(4.95F, 4.95F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.95F, -4.95F)
          curveToRelative(-0.976F, -0.976F, -0.976F, -2.56F, 0.0F, -3.536F)
          reflectiveCurveToRelative(2.56F, -0.976F, 3.536F, 0.0F)
          lineTo(10.036F, 6.5F)
          horizontalLineTo(7.752F)
          curveToRelative(-0.415F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(7.337F, 8.0F, 7.752F, 8.0F)
          horizontalLineToRelative(4.4F)
          curveToRelative(0.469F, 0.0F, 0.85F, -0.38F, 0.85F, -0.85F)
          verticalLineToRelative(-4.4F)
          close()        
      }
    }
    return _arrowRedo16!!
  }

private var _arrowRedo16: ImageVector? = null
