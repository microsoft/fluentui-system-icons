package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpload16: ImageVector
  get() {
    if (_arrowUpload16 != null) {
      return _arrowUpload16!!
    }
    _arrowUpload16 = fluentIcon(name = "Regular.ArrowUpload16", 16f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(3.224F, 2.0F, 3.0F, 2.224F, 3.0F, 2.5F)
          reflectiveCurveTo(3.224F, 3.0F, 3.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(12.776F, 3.0F, 13.0F, 2.776F, 13.0F, 2.5F)
          reflectiveCurveTo(12.776F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveToRelative(4.854F, 2.146F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(7.5F, 5.707F)
          verticalLineTo(13.5F)
          curveTo(7.5F, 13.776F, 7.724F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(5.707F)
          lineToRelative(2.646F, 2.647F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-3.5F, -3.5F)
          close()        
      }
    }
    return _arrowUpload16!!
  }

private var _arrowUpload16: ImageVector? = null
