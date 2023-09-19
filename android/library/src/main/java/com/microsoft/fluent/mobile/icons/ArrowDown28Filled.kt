package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDown28: ImageVector
  get() {
    if (_arrowDown28 != null) {
      return _arrowDown28!!
    }
    _arrowDown28 = fluentIcon(name = "Filled.ArrowDown28", 28f) {
      materialPath {
          moveTo(23.712F, 15.703F)
          curveToRelative(0.388F, -0.393F, 0.384F, -1.026F, -0.009F, -1.414F)
          curveToRelative(-0.392F, -0.389F, -1.026F, -0.385F, -1.414F, 0.008F)
          lineToRelative(-7.288F, 7.376F)
          verticalLineTo(3.998F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.553F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(17.673F)
          lineToRelative(-7.287F, -7.374F)
          curveTo(5.326F, 13.904F, 4.693F, 13.9F, 4.3F, 14.29F)
          curveToRelative(-0.393F, 0.388F, -0.397F, 1.021F, -0.008F, 1.414F)
          lineToRelative(8.82F, 8.927F)
          curveToRelative(0.49F, 0.495F, 1.29F, 0.495F, 1.779F, 0.0F)
          lineToRelative(8.821F, -8.927F)
          close()        
      }
    }
    return _arrowDown28!!
  }

private var _arrowDown28: ImageVector? = null
