package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowExportLtr20: ImageVector
  get() {
    if (_arrowExportLtr20 != null) {
      return _arrowExportLtr20!!
    }
    _arrowExportLtr20 = fluentIcon(name = "Regular.ArrowExportLtr20", 20f) {
      materialPath {
          moveTo(2.5F, 4.0F)
          curveTo(2.776F, 4.0F, 3.0F, 4.224F, 3.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveTo(3.0F, 15.776F, 2.776F, 16.0F, 2.5F, 16.0F)
          reflectiveCurveTo(2.0F, 15.776F, 2.0F, 15.5F)
          verticalLineToRelative(-11.0F)
          curveTo(2.0F, 4.224F, 2.224F, 4.0F, 2.5F, 4.0F)
          close()
          moveTo(5.0F, 10.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(10.793F)
          lineToRelative(-3.147F, -3.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.052F, 0.053F, 0.09F, 0.114F, 0.115F, 0.18F)
          curveTo(17.989F, 9.88F, 18.0F, 9.939F, 18.0F, 10.0F)
          curveToRelative(0.0F, 0.061F, -0.011F, 0.12F, -0.031F, 0.174F)
          curveToRelative(-0.024F, 0.066F, -0.063F, 0.127F, -0.115F, 0.18F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(3.147F, -3.147F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 10.5F, 5.0F, 10.276F, 5.0F, 10.0F)
          close()        
      }
    }
    return _arrowExportLtr20!!
  }

private var _arrowExportLtr20: ImageVector? = null
