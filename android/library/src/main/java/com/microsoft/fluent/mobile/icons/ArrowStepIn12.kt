package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepIn12: ImageVector
  get() {
    if (_arrowStepIn12 != null) {
      return _arrowStepIn12!!
    }
    _arrowStepIn12 = fluentIcon(name = "Filled.ArrowStepIn12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(3.793F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(5.5F, 5.293F)
          verticalLineTo(1.5F)
          curveTo(5.5F, 1.224F, 5.724F, 1.0F, 6.0F, 1.0F)
          close()
          moveToRelative(0.0F, 10.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(6.828F, 8.0F, 6.0F, 8.0F)
          reflectiveCurveTo(4.5F, 8.672F, 4.5F, 9.5F)
          reflectiveCurveTo(5.172F, 11.0F, 6.0F, 11.0F)
          close()        
      }
    }
    return _arrowStepIn12!!
  }

private var _arrowStepIn12: ImageVector? = null
