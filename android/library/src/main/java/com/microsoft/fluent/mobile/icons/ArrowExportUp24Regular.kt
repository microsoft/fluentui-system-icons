package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowExportUp24: ImageVector
  get() {
    if (_arrowExportUp24 != null) {
      return _arrowExportUp24!!
    }
    _arrowExportUp24 = fluentIcon(name = "Regular.ArrowExportUp24", 24f) {
      materialPath {
          moveTo(12.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-5.0F, 5.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(11.0F, 4.56F)
          verticalLineToRelative(13.69F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.56F)
          lineToRelative(3.72F, 3.72F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-5.0F, -5.0F)
          close()
          moveTo(5.25F, 20.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(4.836F, 22.0F, 5.25F, 22.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-13.0F)
          close()        
      }
    }
    return _arrowExportUp24!!
  }

private var _arrowExportUp24: ImageVector? = null
