package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Presenter20: ImageVector
  get() {
    if (_presenter20 != null) {
      return _presenter20!!
    }
    _presenter20 = fluentIcon(name = "Filled.Presenter20", 20f) {
      materialPath {
          moveTo(11.999F, 4.0F)
          curveToRelative(0.0F, 1.105F, -0.896F, 2.0F, -2.0F, 2.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          curveToRelative(1.104F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(-5.0F, 10.784F)
          verticalLineTo(16.5F)
          curveToRelative(0.0F, 0.828F, 0.671F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.716F)
          curveToRelative(0.0F, -0.136F, 0.055F, -0.266F, 0.153F, -0.36F)
          lineToRelative(3.703F, -3.564F)
          curveToRelative(0.324F, -0.312F, 0.103F, -0.86F, -0.347F, -0.86F)
          horizontalLineTo(3.49F)
          curveToRelative(-0.45F, 0.0F, -0.67F, 0.548F, -0.346F, 0.86F)
          lineToRelative(3.702F, 3.564F)
          curveTo(6.943F, 14.518F, 7.0F, 14.648F, 7.0F, 14.784F)
          close()
          moveTo(8.499F, 7.0F)
          curveToRelative(-0.829F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(8.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _presenter20!!
  }

private var _presenter20: ImageVector? = null
