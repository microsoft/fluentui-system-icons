package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowBidirectionalUpDown12: ImageVector
  get() {
    if (_arrowBidirectionalUpDown12 != null) {
      return _arrowBidirectionalUpDown12!!
    }
    _arrowBidirectionalUpDown12 = fluentIcon(name = "Regular.ArrowBidirectionalUpDown12", 12f) {
      materialPath {
          moveTo(3.353F, 4.354F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineTo(6.0F, 2.707F)
          verticalLineToRelative(6.586F)
          lineToRelative(1.646F, -1.646F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineTo(5.0F, 9.293F)
          verticalLineTo(2.707F)
          lineTo(3.353F, 4.354F)
          close()        
      }
    }
    return _arrowBidirectionalUpDown12!!
  }

private var _arrowBidirectionalUpDown12: ImageVector? = null
