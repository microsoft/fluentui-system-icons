package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSortUp24: ImageVector
  get() {
    if (_arrowSortUp24 != null) {
      return _arrowSortUp24!!
    }
    _arrowSortUp24 = fluentIcon(name = "Regular.ArrowSortUp24", 24f) {
      materialPath {
          moveTo(6.72F, 8.715F)
          lineToRelative(4.494F, -4.495F)
          curveToRelative(0.266F, -0.266F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineToRelative(0.085F, 0.072F)
          lineToRelative(4.504F, 4.495F)
          curveToRelative(0.294F, 0.293F, 0.294F, 0.768F, 0.002F, 1.06F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.292F, -0.977F, 0.075F)
          lineTo(15.72F, 9.775F)
          lineToRelative(-3.223F, -3.217F)
          verticalLineToRelative(12.696F)
          curveToRelative(0.0F, 0.38F, -0.281F, 0.693F, -0.648F, 0.743F)
          lineToRelative(-0.101F, 0.007F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineToRelative(-0.007F, -0.102F)
          lineToRelative(-0.001F, -12.698F)
          lineTo(7.78F, 9.775F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(6.72F, 9.775F)
          curveTo(6.453F, 9.51F, 6.43F, 9.092F, 6.647F, 8.8F)
          lineTo(6.72F, 8.715F)
          lineToRelative(4.494F, -4.495F)
          lineTo(6.72F, 8.715F)
          close()        
      }
    }
    return _arrowSortUp24!!
  }

private var _arrowSortUp24: ImageVector? = null
