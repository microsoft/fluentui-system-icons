package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSortDown20: ImageVector
  get() {
    if (_arrowSortDown20 != null) {
      return _arrowSortDown20!!
    }
    _arrowSortDown20 = fluentIcon(name = "Regular.ArrowSortDown20", 20f) {
      materialPath {
          moveTo(10.002F, 15.29F)
          lineToRelative(2.645F, -2.644F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(9.886F, 16.82F)
          curveTo(9.794F, 16.931F, 9.656F, 17.0F, 9.502F, 17.0F)
          horizontalLineTo(9.501F)
          curveToRelative(-0.079F, 0.0F, -0.158F, -0.018F, -0.23F, -0.055F)
          curveToRelative(-0.044F, -0.023F, -0.087F, -0.054F, -0.125F, -0.092F)
          lineToRelative(-0.01F, -0.01F)
          lineToRelative(-3.49F, -3.49F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(2.648F, 2.649F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          curveToRelative(0.277F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(11.79F)
          close()        
      }
    }
    return _arrowSortDown20!!
  }

private var _arrowSortDown20: ImageVector? = null
