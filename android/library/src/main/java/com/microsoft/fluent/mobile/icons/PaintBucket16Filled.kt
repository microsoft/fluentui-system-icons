package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PaintBucket16: ImageVector
  get() {
    if (_paintBucket16 != null) {
      return _paintBucket16!!
    }
    _paintBucket16 = fluentIcon(name = "Filled.PaintBucket16", 16f) {
      materialPath {
          moveTo(8.0F, 1.5F)
          curveTo(8.0F, 1.224F, 7.776F, 1.0F, 7.5F, 1.0F)
          reflectiveCurveTo(7.0F, 1.224F, 7.0F, 1.5F)
          verticalLineToRelative(0.838F)
          curveTo(6.748F, 2.402F, 6.51F, 2.533F, 6.313F, 2.73F)
          lineTo(1.337F, 7.706F)
          curveTo(0.76F, 8.282F, 0.75F, 9.212F, 1.31F, 9.802F)
          lineToRelative(3.62F, 3.8F)
          curveToRelative(0.582F, 0.611F, 1.551F, 0.623F, 2.147F, 0.027F)
          lineToRelative(5.068F, -5.068F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.536F, 0.0F, -2.122F)
          lineTo(8.434F, 2.73F)
          curveTo(8.304F, 2.6F, 8.157F, 2.5F, 8.0F, 2.429F)
          verticalLineTo(1.5F)
          close()
          moveTo(11.293F, 8.0F)
          horizontalLineTo(2.457F)
          lineTo(7.0F, 3.457F)
          verticalLineTo(4.5F)
          curveTo(7.0F, 4.776F, 7.224F, 5.0F, 7.5F, 5.0F)
          reflectiveCurveTo(8.0F, 4.776F, 8.0F, 4.5F)
          verticalLineTo(3.71F)
          lineToRelative(3.439F, 3.437F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(11.293F, 8.0F)
          close()
          moveToRelative(1.628F, 2.222F)
          curveToRelative(-0.223F, -0.255F, -0.62F, -0.255F, -0.842F, 0.0F)
          lineToRelative(-1.15F, 1.315F)
          curveTo(9.746F, 12.887F, 10.705F, 15.0F, 12.5F, 15.0F)
          reflectiveCurveToRelative(2.753F, -2.113F, 1.572F, -3.463F)
          lineToRelative(-1.15F, -1.315F)
          close()        
      }
    }
    return _paintBucket16!!
  }

private var _paintBucket16: ImageVector? = null
