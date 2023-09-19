package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Power24: ImageVector
  get() {
    if (_power24 != null) {
      return _power24!!
    }
    _power24 = fluentIcon(name = "Regular.Power24", 24f) {
      materialPath {
          moveTo(8.204F, 4.82F)
          curveTo(8.58F, 4.646F, 9.026F, 4.809F, 9.201F, 5.184F)
          curveTo(9.376F, 5.56F, 9.213F, 6.005F, 8.838F, 6.18F)
          curveTo(6.214F, 7.403F, 4.5F, 10.042F, 4.5F, 12.991F)
          curveToRelative(0.0F, 4.148F, 3.358F, 7.51F, 7.499F, 7.51F)
          reflectiveCurveToRelative(7.499F, -3.362F, 7.499F, -7.51F)
          curveToRelative(0.0F, -2.943F, -1.707F, -5.577F, -4.323F, -6.804F)
          curveToRelative(-0.375F, -0.176F, -0.536F, -0.622F, -0.36F, -0.997F)
          curveToRelative(0.176F, -0.375F, 0.622F, -0.537F, 0.997F, -0.36F)
          curveToRelative(3.138F, 1.47F, 5.186F, 4.63F, 5.186F, 8.161F)
          curveToRelative(0.0F, 4.976F, -4.029F, 9.01F, -9.0F, 9.01F)
          curveTo(7.029F, 22.0F, 3.0F, 17.966F, 3.0F, 12.99F)
          curveToRelative(0.0F, -3.538F, 2.056F, -6.703F, 5.204F, -8.17F)
          close()
          moveTo(12.0F, 2.497F)
          curveToRelative(0.38F, 0.0F, 0.693F, 0.282F, 0.743F, 0.648F)
          lineToRelative(0.007F, 0.102F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineToRelative(-0.007F, -0.102F)
          verticalLineToRelative(-7.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()        
      }
    }
    return _power24!!
  }

private var _power24: ImageVector? = null
