package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowExportRtl20: ImageVector
  get() {
    if (_arrowExportRtl20 != null) {
      return _arrowExportRtl20!!
    }
    _arrowExportRtl20 = fluentIcon(name = "Regular.ArrowExportRtl20", 20f) {
      materialPath {
          moveTo(17.5F, 4.0F)
          curveTo(17.224F, 4.0F, 17.0F, 4.224F, 17.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-11.0F)
          curveTo(18.0F, 4.224F, 17.776F, 4.0F, 17.5F, 4.0F)
          close()
          moveTo(15.0F, 10.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(3.707F)
          lineToRelative(3.147F, -3.146F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-4.0F, 4.0F)
          curveTo(2.094F, 9.7F, 2.056F, 9.76F, 2.031F, 9.826F)
          curveTo(2.011F, 9.88F, 2.0F, 9.939F, 2.0F, 10.0F)
          curveToRelative(0.0F, 0.061F, 0.011F, 0.12F, 0.031F, 0.174F)
          curveToRelative(0.024F, 0.066F, 0.063F, 0.127F, 0.115F, 0.18F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(3.707F, 10.5F)
          horizontalLineTo(14.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          close()        
      }
    }
    return _arrowExportRtl20!!
  }

private var _arrowExportRtl20: ImageVector? = null
