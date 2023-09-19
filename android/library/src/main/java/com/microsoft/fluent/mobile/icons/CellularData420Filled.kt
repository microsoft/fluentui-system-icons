package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CellularData420: ImageVector
  get() {
    if (_cellularData420 != null) {
      return _cellularData420!!
    }
    _cellularData420 = fluentIcon(name = "Filled.CellularData420", 420f) {
      materialPath {
          moveTo(4.75F, 12.0F)
          curveToRelative(0.377F, 0.0F, 0.688F, 0.277F, 0.742F, 0.64F)
          lineTo(5.5F, 12.75F)
          verticalLineToRelative(2.5F)
          curveTo(5.5F, 15.664F, 5.164F, 16.0F, 4.75F, 16.0F)
          curveToRelative(-0.377F, 0.0F, -0.688F, -0.277F, -0.742F, -0.64F)
          lineTo(4.0F, 15.25F)
          verticalLineToRelative(-2.5F)
          curveTo(4.0F, 12.336F, 4.336F, 12.0F, 4.75F, 12.0F)
          close()
          moveToRelative(3.0F, -2.0F)
          curveToRelative(0.377F, 0.0F, 0.688F, 0.277F, 0.742F, 0.64F)
          lineTo(8.5F, 10.75F)
          verticalLineToRelative(4.5F)
          curveTo(8.5F, 15.664F, 8.164F, 16.0F, 7.75F, 16.0F)
          curveToRelative(-0.377F, 0.0F, -0.688F, -0.277F, -0.742F, -0.64F)
          lineTo(7.0F, 15.25F)
          verticalLineToRelative(-4.5F)
          curveTo(7.0F, 10.336F, 7.336F, 10.0F, 7.75F, 10.0F)
          close()        
      }
    }
    return _cellularData420!!
  }

private var _cellularData420: ImageVector? = null
