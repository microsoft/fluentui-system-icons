package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Camera16: ImageVector
  get() {
    if (_camera16 != null) {
      return _camera16!!
    }
    _camera16 = fluentIcon(name = "Regular.Camera16", 16f) {
      materialPath {
          moveTo(11.0F, 8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveTo(5.0F, 9.657F, 5.0F, 8.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveTo(6.0F, 6.895F, 6.0F, 8.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          close()
          moveTo(6.618F, 2.0F)
          curveTo(6.05F, 2.0F, 5.53F, 2.321F, 5.276F, 2.83F)
          lineTo(4.691F, 4.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-0.691F)
          lineToRelative(-0.585F, -1.17F)
          curveTo(10.469F, 2.32F, 9.95F, 2.0F, 9.382F, 2.0F)
          horizontalLineTo(6.618F)
          close()
          moveTo(6.171F, 3.276F)
          curveTo(6.255F, 3.107F, 6.429F, 3.0F, 6.618F, 3.0F)
          horizontalLineToRelative(2.764F)
          curveToRelative(0.19F, 0.0F, 0.363F, 0.107F, 0.447F, 0.276F)
          lineToRelative(0.724F, 1.448F)
          curveTo(10.637F, 4.893F, 10.81F, 5.0F, 11.0F, 5.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.19F, 0.0F, 0.362F, -0.107F, 0.447F, -0.276F)
          lineToRelative(0.724F, -1.448F)
          close()        
      }
    }
    return _camera16!!
  }

private var _camera16: ImageVector? = null
