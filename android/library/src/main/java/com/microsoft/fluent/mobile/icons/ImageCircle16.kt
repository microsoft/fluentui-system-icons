package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ImageCircle16: ImageVector
  get() {
    if (_imageCircle16 != null) {
      return _imageCircle16!!
    }
    _imageCircle16 = fluentIcon(name = "Regular.ImageCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 3.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          curveToRelative(0.0F, 1.208F, 0.429F, 2.316F, 1.142F, 3.18F)
          lineToRelative(2.806F, -2.76F)
          curveToRelative(0.584F, -0.575F, 1.52F, -0.575F, 2.105F, 0.0F)
          lineToRelative(2.805F, 2.761F)
          curveTo(12.572F, 10.316F, 13.0F, 9.208F, 13.0F, 8.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveToRelative(0.0F, 10.0F)
          curveToRelative(1.193F, 0.0F, 2.289F, -0.418F, 3.149F, -1.116F)
          lineTo(8.35F, 9.131F)
          curveToRelative(-0.195F, -0.191F, -0.507F, -0.191F, -0.701F, 0.0F)
          lineToRelative(-2.798F, 2.754F)
          curveTo(5.712F, 12.582F, 6.807F, 13.0F, 8.0F, 13.0F)
          close()
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(8.0F, -1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _imageCircle16!!
  }

private var _imageCircle16: ImageVector? = null
