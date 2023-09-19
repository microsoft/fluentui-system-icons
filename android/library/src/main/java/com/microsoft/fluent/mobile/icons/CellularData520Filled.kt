package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CellularData520: ImageVector
  get() {
    if (_cellularData520 != null) {
      return _cellularData520!!
    }
    _cellularData520 = fluentIcon(name = "Filled.CellularData520", 520f) {
      materialPath {
          moveTo(4.75F, 12.0F)
          curveToRelative(0.377F, 0.0F, 0.689F, 0.278F, 0.743F, 0.64F)
          lineTo(5.5F, 12.75F)
          verticalLineToRelative(2.503F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.377F, 0.0F, -0.69F, -0.277F, -0.743F, -0.64F)
          lineTo(4.0F, 15.254F)
          verticalLineTo(12.75F)
          curveTo(4.0F, 12.336F, 4.336F, 12.0F, 4.75F, 12.0F)
          close()        
      }
    }
    return _cellularData520!!
  }

private var _cellularData520: ImageVector? = null
