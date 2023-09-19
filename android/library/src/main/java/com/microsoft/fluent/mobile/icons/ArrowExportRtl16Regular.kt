package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowExportRtl16: ImageVector
  get() {
    if (_arrowExportRtl16 != null) {
      return _arrowExportRtl16!!
    }
    _arrowExportRtl16 = fluentIcon(name = "Regular.ArrowExportRtl16", 16f) {
      materialPath {
          moveTo(14.5F, 3.0F)
          curveTo(14.224F, 3.0F, 14.0F, 3.224F, 14.0F, 3.5F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(15.0F, 12.276F, 15.0F, 12.0F)
          verticalLineTo(3.5F)
          curveTo(15.0F, 3.224F, 14.776F, 3.0F, 14.5F, 3.0F)
          close()
          moveTo(5.354F, 3.647F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(2.707F, 8.0F)
          horizontalLineTo(11.5F)
          curveTo(11.776F, 8.0F, 12.0F, 7.776F, 12.0F, 7.5F)
          reflectiveCurveTo(11.776F, 7.0F, 11.5F, 7.0F)
          horizontalLineTo(2.707F)
          lineToRelative(2.647F, -2.646F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _arrowExportRtl16!!
  }

private var _arrowExportRtl16: ImageVector? = null
