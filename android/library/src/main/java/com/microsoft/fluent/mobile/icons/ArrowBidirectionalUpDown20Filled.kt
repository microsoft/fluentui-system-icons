package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowBidirectionalUpDown20: ImageVector
  get() {
    if (_arrowBidirectionalUpDown20 != null) {
      return _arrowBidirectionalUpDown20!!
    }
    _arrowBidirectionalUpDown20 = fluentIcon(name = "Filled.ArrowBidirectionalUpDown20", 20f) {
      materialPath {
          moveTo(6.78F, 7.78F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(3.5F, -3.5F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(10.5F, 5.56F)
          verticalLineToRelative(8.88F)
          lineToRelative(2.22F, -2.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(9.0F, 14.44F)
          verticalLineTo(5.56F)
          lineTo(6.78F, 7.78F)
          close()        
      }
    }
    return _arrowBidirectionalUpDown20!!
  }

private var _arrowBidirectionalUpDown20: ImageVector? = null
