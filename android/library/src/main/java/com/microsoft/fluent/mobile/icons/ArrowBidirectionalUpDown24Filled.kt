package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowBidirectionalUpDown24: ImageVector
  get() {
    if (_arrowBidirectionalUpDown24 != null) {
      return _arrowBidirectionalUpDown24!!
    }
    _arrowBidirectionalUpDown24 = fluentIcon(name = "Filled.ArrowBidirectionalUpDown24", 24f) {
      materialPath {
          moveTo(7.975F, 9.689F)
          curveToRelative(-0.38F, 0.4F, -1.013F, 0.416F, -1.414F, 0.036F)
          curveToRelative(-0.4F, -0.38F, -0.416F, -1.013F, -0.036F, -1.414F)
          lineToRelative(4.75F, -5.0F)
          curveTo(11.464F, 3.112F, 11.725F, 3.0F, 12.0F, 3.0F)
          curveToRelative(0.274F, 0.0F, 0.536F, 0.112F, 0.725F, 0.311F)
          lineToRelative(4.75F, 5.0F)
          curveToRelative(0.38F, 0.4F, 0.364F, 1.034F, -0.036F, 1.414F)
          curveToRelative(-0.4F, 0.38F, -1.034F, 0.364F, -1.414F, -0.036F)
          lineTo(13.0F, 6.505F)
          verticalLineToRelative(10.99F)
          lineToRelative(3.025F, -3.184F)
          curveToRelative(0.38F, -0.4F, 1.013F, -0.416F, 1.414F, -0.036F)
          curveToRelative(0.4F, 0.38F, 0.416F, 1.013F, 0.036F, 1.414F)
          lineToRelative(-4.75F, 5.0F)
          curveTo(12.536F, 20.887F, 12.275F, 21.0F, 12.0F, 21.0F)
          curveToRelative(-0.274F, 0.0F, -0.536F, -0.113F, -0.725F, -0.311F)
          lineToRelative(-4.75F, -5.0F)
          curveToRelative(-0.38F, -0.4F, -0.364F, -1.034F, 0.036F, -1.414F)
          curveToRelative(0.4F, -0.38F, 1.034F, -0.364F, 1.414F, 0.036F)
          lineTo(11.0F, 17.495F)
          verticalLineTo(6.505F)
          lineTo(7.975F, 9.689F)
          close()        
      }
    }
    return _arrowBidirectionalUpDown24!!
  }

private var _arrowBidirectionalUpDown24: ImageVector? = null
