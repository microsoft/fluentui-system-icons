package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookDownLeft16: ImageVector
  get() {
    if (_arrowHookDownLeft16 != null) {
      return _arrowHookDownLeft16!!
    }
    _arrowHookDownLeft16 = fluentIcon(name = "Regular.ArrowHookDownLeft16", 16f) {
      materialPath {
          moveTo(5.0F, 4.5F)
          curveTo(5.0F, 4.224F, 5.224F, 4.0F, 5.5F, 4.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.136F, 0.0F, 2.024F, 0.43F, 2.624F, 1.105F)
          curveTo(11.715F, 5.771F, 12.0F, 6.643F, 12.0F, 7.5F)
          reflectiveCurveToRelative(-0.285F, 1.73F, -0.876F, 2.395F)
          curveTo(10.524F, 10.569F, 9.636F, 11.0F, 8.5F, 11.0F)
          horizontalLineTo(4.707F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(4.707F, 10.0F)
          horizontalLineTo(8.5F)
          curveToRelative(0.864F, 0.0F, 1.476F, -0.32F, 1.876F, -0.77F)
          curveTo(10.785F, 8.77F, 11.0F, 8.143F, 11.0F, 7.5F)
          curveToRelative(0.0F, -0.644F, -0.215F, -1.27F, -0.624F, -1.73F)
          curveTo(9.976F, 5.32F, 9.364F, 5.0F, 8.5F, 5.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(5.224F, 5.0F, 5.0F, 4.776F, 5.0F, 4.5F)
          close()        
      }
    }
    return _arrowHookDownLeft16!!
  }

private var _arrowHookDownLeft16: ImageVector? = null
