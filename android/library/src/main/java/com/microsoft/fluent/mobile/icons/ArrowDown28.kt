package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDown28: ImageVector
  get() {
    if (_arrowDown28 != null) {
      return _arrowDown28!!
    }
    _arrowDown28 = fluentIcon(name = "Regular.ArrowDown28", 28f) {
      materialPath {
          moveTo(23.791F, 15.267F)
          curveToRelative(0.288F, -0.299F, 0.279F, -0.774F, -0.02F, -1.06F)
          curveToRelative(-0.299F, -0.288F, -0.773F, -0.279F, -1.06F, 0.02F)
          lineTo(14.75F, 22.5F)
          verticalLineTo(3.748F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineTo(22.5F)
          lineToRelative(-7.958F, -8.273F)
          curveToRelative(-0.288F, -0.299F, -0.763F, -0.308F, -1.061F, -0.02F)
          curveToRelative(-0.299F, 0.286F, -0.308F, 0.761F, -0.02F, 1.06F)
          lineToRelative(9.069F, 9.428F)
          curveToRelative(0.393F, 0.409F, 1.048F, 0.409F, 1.441F, 0.0F)
          lineToRelative(9.07F, -9.428F)
          close()        
      }
    }
    return _arrowDown28!!
  }

private var _arrowDown28: ImageVector? = null
