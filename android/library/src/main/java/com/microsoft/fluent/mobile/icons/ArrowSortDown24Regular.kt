package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSortDown24: ImageVector
  get() {
    if (_arrowSortDown24 != null) {
      return _arrowSortDown24!!
    }
    _arrowSortDown24 = fluentIcon(name = "Regular.ArrowSortDown24", 24f) {
      materialPath {
          moveTo(11.65F, 4.007F)
          lineTo(11.75F, 4.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.744F, 0.648F)
          lineToRelative(0.007F, 0.102F)
          lineTo(12.5F, 17.446F)
          lineToRelative(3.22F, -3.221F)
          curveToRelative(0.266F, -0.266F, 0.682F, -0.29F, 0.976F, -0.073F)
          lineToRelative(0.084F, 0.072F)
          curveToRelative(0.267F, 0.267F, 0.29F, 0.683F, 0.073F, 0.977F)
          lineToRelative(-0.072F, 0.084F)
          lineToRelative(-4.497F, 4.5F)
          curveToRelative(-0.266F, 0.266F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineToRelative(-0.084F, -0.073F)
          lineToRelative(-4.504F, -4.5F)
          curveToRelative(-0.293F, -0.292F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.266F, -0.266F, 0.682F, -0.29F, 0.976F, -0.073F)
          lineToRelative(0.084F, 0.072F)
          lineTo(11.0F, 17.442F)
          verticalLineTo(4.75F)
          curveToRelative(0.0F, -0.38F, 0.283F, -0.694F, 0.65F, -0.743F)
          lineTo(11.75F, 4.0F)
          lineToRelative(-0.1F, 0.007F)
          close()        
      }
    }
    return _arrowSortDown24!!
  }

private var _arrowSortDown24: ImageVector? = null
