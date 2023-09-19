package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FontIncrease20: ImageVector
  get() {
    if (_fontIncrease20 != null) {
      return _fontIncrease20!!
    }
    _fontIncrease20 = fluentIcon(name = "Filled.FontIncrease20", 20f) {
      materialPath {
          moveTo(14.238F, 4.82F)
          curveToRelative(-0.314F, 0.269F, -0.788F, 0.232F, -1.057F, -0.082F)
          curveToRelative(-0.27F, -0.314F, -0.233F, -0.788F, 0.081F, -1.058F)
          lineToRelative(1.75F, -1.5F)
          curveToRelative(0.28F, -0.24F, 0.695F, -0.24F, 0.976F, 0.0F)
          lineToRelative(1.75F, 1.5F)
          curveToRelative(0.315F, 0.27F, 0.351F, 0.744F, 0.081F, 1.058F)
          curveToRelative(-0.27F, 0.314F, -0.743F, 0.351F, -1.057F, 0.081F)
          lineTo(15.5F, 3.738F)
          lineToRelative(-1.262F, 1.081F)
          close()
          moveTo(10.0F, 3.75F)
          curveToRelative(-0.305F, 0.0F, -0.579F, 0.184F, -0.694F, 0.466F)
          lineToRelative(-4.5F, 11.0F)
          curveToRelative(-0.157F, 0.383F, 0.027F, 0.821F, 0.41F, 0.978F)
          curveToRelative(0.384F, 0.157F, 0.821F, -0.027F, 0.978F, -0.41F)
          lineTo(7.64F, 12.25F)
          horizontalLineToRelative(4.72F)
          lineToRelative(1.446F, 3.534F)
          curveToRelative(0.157F, 0.383F, 0.595F, 0.567F, 0.978F, 0.41F)
          curveToRelative(0.383F, -0.157F, 0.567F, -0.595F, 0.41F, -0.978F)
          lineToRelative(-4.5F, -11.0F)
          curveTo(10.58F, 3.934F, 10.304F, 3.75F, 10.0F, 3.75F)
          close()
          moveToRelative(0.0F, 2.73F)
          lineToRelative(1.746F, 4.27F)
          horizontalLineTo(8.255F)
          lineTo(10.0F, 6.48F)
          close()        
      }
    }
    return _fontIncrease20!!
  }

private var _fontIncrease20: ImageVector? = null
