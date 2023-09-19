package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DualScreenMirror20: ImageVector
  get() {
    if (_dualScreenMirror20 != null) {
      return _dualScreenMirror20!!
    }
    _dualScreenMirror20 = fluentIcon(name = "Filled.DualScreenMirror20", 20f) {
      materialPath {
          moveTo(10.5F, 16.0F)
          horizontalLineTo(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(12.0F)
          close()
          moveToRelative(-1.0F, -12.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(4.0F)
          close()
          moveTo(5.75F, 8.0F)
          curveToRelative(0.178F, 0.0F, 0.342F, 0.095F, 0.432F, 0.248F)
          lineToRelative(1.75F, 3.0F)
          curveToRelative(0.09F, 0.155F, 0.09F, 0.346F, 0.002F, 0.501F)
          curveTo(7.844F, 11.904F, 7.679F, 12.0F, 7.5F, 12.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.179F, 0.0F, -0.344F, -0.096F, -0.434F, -0.251F)
          curveToRelative(-0.089F, -0.155F, -0.088F, -0.346F, 0.002F, -0.5F)
          lineToRelative(1.75F, -3.0F)
          curveTo(5.408F, 8.093F, 5.572F, 8.0F, 5.75F, 8.0F)
          close()
          moveToRelative(8.932F, 0.248F)
          lineToRelative(1.75F, 3.0F)
          curveToRelative(0.09F, 0.155F, 0.09F, 0.346F, 0.002F, 0.501F)
          curveTo(16.344F, 11.904F, 16.179F, 12.0F, 16.0F, 12.0F)
          horizontalLineToRelative(-3.5F)
          curveToRelative(-0.179F, 0.0F, -0.344F, -0.096F, -0.434F, -0.251F)
          curveToRelative(-0.089F, -0.155F, -0.088F, -0.346F, 0.002F, -0.5F)
          lineToRelative(1.75F, -3.0F)
          curveTo(13.908F, 8.093F, 14.072F, 8.0F, 14.25F, 8.0F)
          reflectiveCurveToRelative(0.342F, 0.095F, 0.432F, 0.248F)
          close()        
      }
    }
    return _dualScreenMirror20!!
  }

private var _dualScreenMirror20: ImageVector? = null
