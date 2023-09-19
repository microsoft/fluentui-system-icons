package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FontDecrease20: ImageVector
  get() {
    if (_fontDecrease20 != null) {
      return _fontDecrease20!!
    }
    _fontDecrease20 = fluentIcon(name = "Filled.FontDecrease20", 20f) {
      materialPath {
          moveTo(14.238F, 2.18F)
          curveToRelative(-0.314F, -0.269F, -0.788F, -0.233F, -1.057F, 0.082F)
          curveToRelative(-0.27F, 0.314F, -0.233F, 0.788F, 0.081F, 1.057F)
          lineToRelative(1.75F, 1.5F)
          curveToRelative(0.28F, 0.241F, 0.695F, 0.241F, 0.976F, 0.0F)
          lineToRelative(1.75F, -1.5F)
          curveToRelative(0.315F, -0.27F, 0.351F, -0.743F, 0.081F, -1.057F)
          curveToRelative(-0.27F, -0.315F, -0.743F, -0.351F, -1.057F, -0.081F)
          lineTo(15.5F, 3.262F)
          lineToRelative(-1.262F, -1.081F)
          close()
          moveTo(10.0F, 4.0F)
          curveTo(9.694F, 4.0F, 9.42F, 4.185F, 9.305F, 4.469F)
          lineToRelative(-4.25F, 10.5F)
          curveToRelative(-0.155F, 0.383F, 0.03F, 0.82F, 0.414F, 0.976F)
          curveToRelative(0.384F, 0.155F, 0.821F, -0.03F, 0.976F, -0.414F)
          lineTo(7.875F, 12.0F)
          horizontalLineToRelative(4.25F)
          lineToRelative(1.43F, 3.531F)
          curveToRelative(0.155F, 0.384F, 0.592F, 0.57F, 0.976F, 0.414F)
          curveToRelative(0.384F, -0.155F, 0.57F, -0.593F, 0.414F, -0.977F)
          lineToRelative(-4.25F, -10.5F)
          curveTo(10.581F, 4.186F, 10.305F, 4.0F, 10.0F, 4.0F)
          close()
          moveToRelative(0.0F, 2.749F)
          lineToRelative(1.518F, 3.75F)
          horizontalLineTo(8.482F)
          lineTo(10.0F, 6.75F)
          close()        
      }
    }
    return _fontDecrease20!!
  }

private var _fontDecrease20: ImageVector? = null
