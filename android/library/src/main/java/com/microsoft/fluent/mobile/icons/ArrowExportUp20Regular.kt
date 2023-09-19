package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowExportUp20: ImageVector
  get() {
    if (_arrowExportUp20 != null) {
      return _arrowExportUp20!!
    }
    _arrowExportUp20 = fluentIcon(name = "Regular.ArrowExportUp20", 20f) {
      materialPath {
          moveTo(9.646F, 2.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(10.5F, 3.707F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(3.707F)
          lineTo(6.354F, 6.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(4.0F, -4.0F)
          close()
          moveTo(4.0F, 17.5F)
          curveTo(4.0F, 17.224F, 4.224F, 17.0F, 4.5F, 17.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(15.776F, 18.0F, 15.5F, 18.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(4.224F, 18.0F, 4.0F, 17.776F, 4.0F, 17.5F)
          close()        
      }
    }
    return _arrowExportUp20!!
  }

private var _arrowExportUp20: ImageVector? = null
