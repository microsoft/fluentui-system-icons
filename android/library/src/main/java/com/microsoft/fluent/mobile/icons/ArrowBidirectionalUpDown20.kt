package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowBidirectionalUpDown20: ImageVector
  get() {
    if (_arrowBidirectionalUpDown20 != null) {
      return _arrowBidirectionalUpDown20!!
    }
    _arrowBidirectionalUpDown20 = fluentIcon(name = "Regular.ArrowBidirectionalUpDown20", 20f) {
      materialPath {
          moveTo(6.354F, 7.354F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(3.5F, -3.5F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineTo(10.0F, 4.707F)
          verticalLineToRelative(10.586F)
          lineToRelative(2.646F, -2.647F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(9.0F, 15.293F)
          verticalLineTo(4.707F)
          lineTo(6.354F, 7.354F)
          close()        
      }
    }
    return _arrowBidirectionalUpDown20!!
  }

private var _arrowBidirectionalUpDown20: ImageVector? = null
