package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowExportUp20: ImageVector
  get() {
    if (_arrowExportUp20 != null) {
      return _arrowExportUp20!!
    }
    _arrowExportUp20 = fluentIcon(name = "Filled.ArrowExportUp20", 20f) {
      materialPath {
          moveTo(10.53F, 1.72F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.72F, -2.72F)
          verticalLineToRelative(10.19F)
          curveTo(9.25F, 14.664F, 9.586F, 15.0F, 10.0F, 15.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.06F)
          lineToRelative(2.72F, 2.72F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.0F, -4.0F)
          close()
          moveTo(4.5F, 16.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(4.086F, 18.0F, 4.5F, 18.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-11.0F)
          close()        
      }
    }
    return _arrowExportUp20!!
  }

private var _arrowExportUp20: ImageVector? = null
