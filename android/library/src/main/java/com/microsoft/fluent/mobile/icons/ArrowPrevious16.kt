package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowPrevious16: ImageVector
  get() {
    if (_arrowPrevious16 != null) {
      return _arrowPrevious16!!
    }
    _arrowPrevious16 = fluentIcon(name = "Regular.ArrowPrevious16", 16f) {
      materialPath {
          moveTo(12.354F, 3.853F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(8.207F, 8.0F)
          lineToRelative(4.147F, -4.146F)
          close()
          moveTo(4.0F, 3.5F)
          curveTo(4.0F, 3.224F, 4.224F, 3.0F, 4.5F, 3.0F)
          reflectiveCurveTo(5.0F, 3.224F, 5.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(5.0F, 12.776F, 4.776F, 13.0F, 4.5F, 13.0F)
          reflectiveCurveTo(4.0F, 12.776F, 4.0F, 12.5F)
          verticalLineToRelative(-9.0F)
          close()        
      }
    }
    return _arrowPrevious16!!
  }

private var _arrowPrevious16: ImageVector? = null
