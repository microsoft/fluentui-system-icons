package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookUpRight16: ImageVector
  get() {
    if (_arrowHookUpRight16 != null) {
      return _arrowHookUpRight16!!
    }
    _arrowHookUpRight16 = fluentIcon(name = "Regular.ArrowHookUpRight16", 16f) {
      materialPath {
          moveTo(4.876F, 10.895F)
          curveTo(5.476F, 11.569F, 6.364F, 12.0F, 7.5F, 12.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.776F, 11.0F, 10.5F, 11.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.864F, 0.0F, -1.476F, -0.32F, -1.876F, -0.77F)
          curveTo(5.215F, 9.77F, 5.0F, 9.143F, 5.0F, 8.5F)
          curveToRelative(0.0F, -0.644F, 0.215F, -1.27F, 0.624F, -1.73F)
          curveTo(6.024F, 6.32F, 6.636F, 6.0F, 7.5F, 6.0F)
          horizontalLineToRelative(3.793F)
          lineToRelative(-1.146F, 1.146F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineTo(11.293F, 5.0F)
          horizontalLineTo(7.5F)
          curveTo(6.364F, 5.0F, 5.476F, 5.43F, 4.876F, 6.105F)
          curveTo(4.285F, 6.771F, 4.0F, 7.643F, 4.0F, 8.5F)
          reflectiveCurveToRelative(0.285F, 1.73F, 0.876F, 2.395F)
          close()        
      }
    }
    return _arrowHookUpRight16!!
  }

private var _arrowHookUpRight16: ImageVector? = null
