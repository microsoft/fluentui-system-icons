package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowOutlineUpRight32: ImageVector
  get() {
    if (_arrowOutlineUpRight32 != null) {
      return _arrowOutlineUpRight32!!
    }
    _arrowOutlineUpRight32 = fluentIcon(name = "Filled.ArrowOutlineUpRight32", 32f) {
      materialPath {
          moveTo(29.976F, 5.534F)
          curveToRelative(0.166F, -2.003F, -1.506F, -3.676F, -3.51F, -3.509F)
          lineTo(9.952F, 3.402F)
          curveToRelative(-2.757F, 0.23F, -3.985F, 3.58F, -2.028F, 5.536F)
          lineToRelative(1.913F, 1.914F)
          lineToRelative(-6.951F, 6.955F)
          curveToRelative(-1.268F, 1.27F, -1.268F, 3.326F, 0.0F, 4.595F)
          lineToRelative(6.712F, 6.717F)
          curveToRelative(1.27F, 1.27F, 3.328F, 1.27F, 4.597F, 0.0F)
          lineToRelative(6.955F, -6.954F)
          lineToRelative(1.913F, 1.913F)
          curveToRelative(1.957F, 1.956F, 5.307F, 0.729F, 5.537F, -2.029F)
          lineToRelative(1.377F, -16.515F)
          close()        
      }
    }
    return _arrowOutlineUpRight32!!
  }

private var _arrowOutlineUpRight32: ImageVector? = null
