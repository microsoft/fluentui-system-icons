package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowBidirectionalUpDown12: ImageVector
  get() {
    if (_arrowBidirectionalUpDown12 != null) {
      return _arrowBidirectionalUpDown12!!
    }
    _arrowBidirectionalUpDown12 = fluentIcon(name = "Filled.ArrowBidirectionalUpDown12", 12f) {
      materialPath {
          moveTo(3.78F, 4.53F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(6.5F, 3.31F)
          verticalLineToRelative(5.38F)
          lineToRelative(1.22F, -1.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(5.0F, 8.69F)
          verticalLineTo(3.31F)
          lineTo(3.78F, 4.53F)
          close()        
      }
    }
    return _arrowBidirectionalUpDown12!!
  }

private var _arrowBidirectionalUpDown12: ImageVector? = null
