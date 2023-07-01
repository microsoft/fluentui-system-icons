package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowExportLtr16: ImageVector
  get() {
    if (_arrowExportLtr16 != null) {
      return _arrowExportLtr16!!
    }
    _arrowExportLtr16 = fluentIcon(name = "Filled.ArrowExportLtr16", 16f) {
      materialPath {
          moveTo(1.75F, 3.0F)
          curveTo(2.164F, 3.0F, 2.5F, 3.336F, 2.5F, 3.75F)
          verticalLineToRelative(8.5F)
          curveTo(2.5F, 12.664F, 2.164F, 13.0F, 1.75F, 13.0F)
          reflectiveCurveTo(1.0F, 12.664F, 1.0F, 12.25F)
          verticalLineToRelative(-8.5F)
          curveTo(1.0F, 3.336F, 1.336F, 3.0F, 1.75F, 3.0F)
          close()
          moveToRelative(8.47F, 0.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.22F, -2.22F)
          horizontalLineTo(4.75F)
          curveTo(4.336F, 8.5F, 4.0F, 8.164F, 4.0F, 7.75F)
          reflectiveCurveTo(4.336F, 7.0F, 4.75F, 7.0F)
          horizontalLineToRelative(7.69F)
          lineToRelative(-2.22F, -2.22F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowExportLtr16!!
  }

private var _arrowExportLtr16: ImageVector? = null
