package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowExportLtr16: ImageVector
  get() {
    if (_arrowExportLtr16 != null) {
      return _arrowExportLtr16!!
    }
    _arrowExportLtr16 = fluentIcon(name = "Regular.ArrowExportLtr16", 16f) {
      materialPath {
          moveTo(1.5F, 3.0F)
          curveTo(1.776F, 3.0F, 2.0F, 3.224F, 2.0F, 3.5F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(1.0F, 12.276F, 1.0F, 12.0F)
          verticalLineTo(3.5F)
          curveTo(1.0F, 3.224F, 1.224F, 3.0F, 1.5F, 3.0F)
          close()
          moveToRelative(9.146F, 0.647F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(13.293F, 8.0F)
          horizontalLineTo(4.5F)
          curveTo(4.224F, 8.0F, 4.0F, 7.776F, 4.0F, 7.5F)
          reflectiveCurveTo(4.224F, 7.0F, 4.5F, 7.0F)
          horizontalLineToRelative(8.793F)
          lineToRelative(-2.647F, -2.646F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _arrowExportLtr16!!
  }

private var _arrowExportLtr16: ImageVector? = null
