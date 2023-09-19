package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowBidirectionalUpDown24: ImageVector
  get() {
    if (_arrowBidirectionalUpDown24 != null) {
      return _arrowBidirectionalUpDown24!!
    }
    _arrowBidirectionalUpDown24 = fluentIcon(name = "Regular.ArrowBidirectionalUpDown24", 24f) {
      materialPath {
          moveTo(11.25F, 5.628F)
          verticalLineToRelative(12.744F)
          lineToRelative(-3.456F, -3.639F)
          curveToRelative(-0.285F, -0.3F, -0.76F, -0.312F, -1.06F, -0.027F)
          curveToRelative(-0.3F, 0.286F, -0.313F, 0.76F, -0.028F, 1.06F)
          lineToRelative(4.75F, 5.0F)
          curveTo(11.598F, 20.917F, 11.794F, 21.0F, 12.0F, 21.0F)
          curveToRelative(0.206F, 0.0F, 0.402F, -0.084F, 0.544F, -0.233F)
          lineToRelative(4.75F, -5.0F)
          curveToRelative(0.285F, -0.3F, 0.273F, -0.775F, -0.027F, -1.06F)
          curveToRelative(-0.3F, -0.286F, -0.776F, -0.274F, -1.06F, 0.026F)
          lineToRelative(-3.457F, 3.639F)
          verticalLineTo(5.628F)
          lineToRelative(3.456F, 3.639F)
          curveToRelative(0.285F, 0.3F, 0.76F, 0.312F, 1.06F, 0.027F)
          curveToRelative(0.3F, -0.286F, 0.313F, -0.76F, 0.028F, -1.06F)
          lineToRelative(-4.75F, -5.0F)
          curveTo(12.409F, 3.09F, 12.215F, 3.0F, 12.0F, 3.0F)
          curveToRelative(-0.215F, 0.0F, -0.408F, 0.09F, -0.545F, 0.235F)
          lineTo(6.706F, 8.233F)
          curveToRelative(-0.285F, 0.3F, -0.273F, 0.775F, 0.027F, 1.06F)
          curveToRelative(0.3F, 0.286F, 0.776F, 0.274F, 1.06F, -0.026F)
          lineToRelative(3.457F, -3.639F)
          close()        
      }
    }
    return _arrowBidirectionalUpDown24!!
  }

private var _arrowBidirectionalUpDown24: ImageVector? = null
