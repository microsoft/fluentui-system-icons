package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowExportUp24: ImageVector
  get() {
    if (_arrowExportUp24 != null) {
      return _arrowExportUp24!!
    }
    _arrowExportUp24 = fluentIcon(name = "Filled.ArrowExportUp24", 24f) {
      materialPath {
          moveTo(12.707F, 2.293F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineToRelative(-5.0F, 5.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineTo(11.0F, 5.414F)
          verticalLineTo(18.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(5.414F)
          lineToRelative(3.293F, 3.293F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-5.0F, -5.0F)
          close()
          moveTo(5.25F, 20.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(4.836F, 22.0F, 5.25F, 22.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(5.25F)
          close()        
      }
    }
    return _arrowExportUp24!!
  }

private var _arrowExportUp24: ImageVector? = null
