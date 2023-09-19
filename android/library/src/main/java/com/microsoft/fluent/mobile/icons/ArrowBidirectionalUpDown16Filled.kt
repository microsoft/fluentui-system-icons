package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowBidirectionalUpDown16: ImageVector
  get() {
    if (_arrowBidirectionalUpDown16 != null) {
      return _arrowBidirectionalUpDown16!!
    }
    _arrowBidirectionalUpDown16 = fluentIcon(name = "Filled.ArrowBidirectionalUpDown16", 16f) {
      materialPath {
          moveTo(5.28F, 6.28F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(8.5F, 4.56F)
          verticalLineToRelative(6.88F)
          lineToRelative(1.72F, -1.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(7.0F, 11.44F)
          verticalLineTo(4.56F)
          lineTo(5.28F, 6.28F)
          close()        
      }
    }
    return _arrowBidirectionalUpDown16!!
  }

private var _arrowBidirectionalUpDown16: ImageVector? = null
