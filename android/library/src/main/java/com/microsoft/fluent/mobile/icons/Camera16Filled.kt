package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Camera16: ImageVector
  get() {
    if (_camera16 != null) {
      return _camera16!!
    }
    _camera16 = fluentIcon(name = "Filled.Camera16", 16f) {
      materialPath {
          moveTo(10.0F, 8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveTo(6.0F, 9.105F, 6.0F, 8.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveTo(5.276F, 2.83F)
          curveTo(5.531F, 2.32F, 6.05F, 2.0F, 6.618F, 2.0F)
          horizontalLineToRelative(2.764F)
          curveToRelative(0.568F, 0.0F, 1.088F, 0.321F, 1.342F, 0.83F)
          lineTo(11.309F, 4.0F)
          horizontalLineTo(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(0.691F)
          lineToRelative(0.585F, -1.17F)
          close()
          moveTo(11.0F, 8.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveTo(5.0F, 6.343F, 5.0F, 8.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          close()        
      }
    }
    return _camera16!!
  }

private var _camera16: ImageVector? = null
