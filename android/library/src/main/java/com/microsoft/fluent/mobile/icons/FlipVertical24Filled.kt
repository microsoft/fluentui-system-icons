package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipVertical24: ImageVector
  get() {
    if (_flipVertical24 != null) {
      return _flipVertical24!!
    }
    _flipVertical24 = fluentIcon(name = "Filled.FlipVertical24", 24f) {
      materialPath {
          moveTo(19.547F, 2.163F)
          curveTo(19.83F, 2.348F, 20.0F, 2.663F, 20.0F, 3.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.473F, 0.0F, -0.882F, -0.332F, -0.979F, -0.795F)
          curveTo(1.924F, 9.74F, 2.166F, 9.274F, 2.6F, 9.084F)
          lineToRelative(16.0F, -7.0F)
          curveToRelative(0.31F, -0.135F, 0.666F, -0.106F, 0.948F, 0.08F)
          close()
          moveTo(7.781F, 9.0F)
          horizontalLineTo(18.0F)
          verticalLineTo(4.529F)
          lineTo(7.78F, 9.0F)
          close()
          moveTo(20.0F, 21.5F)
          curveToRelative(0.0F, 0.171F, -0.087F, 0.33F, -0.232F, 0.422F)
          curveToRelative(-0.145F, 0.092F, -0.326F, 0.103F, -0.48F, 0.03F)
          lineToRelative(-17.0F, -8.0F)
          curveToRelative(-0.213F, -0.1F, -0.327F, -0.333F, -0.276F, -0.561F)
          curveTo(2.063F, 13.162F, 2.266F, 13.0F, 2.5F, 13.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(8.0F)
          close()        
      }
    }
    return _flipVertical24!!
  }

private var _flipVertical24: ImageVector? = null
