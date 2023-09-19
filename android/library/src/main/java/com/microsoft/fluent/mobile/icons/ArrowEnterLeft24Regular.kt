package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowEnterLeft24: ImageVector
  get() {
    if (_arrowEnterLeft24 != null) {
      return _arrowEnterLeft24!!
    }
    _arrowEnterLeft24 = fluentIcon(name = "Regular.ArrowEnterLeft24", 24f) {
      materialPath {
          moveTo(21.25F, 4.0F)
          curveTo(21.666F, 4.0F, 22.0F, 4.336F, 22.0F, 4.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 2.071F, -1.678F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(4.587F)
          lineToRelative(3.72F, 3.72F)
          curveToRelative(0.266F, 0.266F, 0.29F, 0.683F, 0.072F, 0.976F)
          lineTo(8.306F, 19.78F)
          curveToRelative(-0.267F, 0.267F, -0.683F, 0.29F, -0.977F, 0.073F)
          lineTo(7.245F, 19.78F)
          lineToRelative(-5.0F, -5.0F)
          curveToRelative(-0.266F, -0.266F, -0.29F, -0.683F, -0.073F, -0.976F)
          lineToRelative(0.073F, -0.084F)
          lineToRelative(5.0F, -5.0F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.267F, 0.266F, 0.291F, 0.683F, 0.073F, 0.976F)
          lineTo(8.306F, 9.78F)
          lineToRelative(-3.72F, 3.72F)
          horizontalLineToRelative(13.665F)
          curveToRelative(1.19F, 0.0F, 2.165F, -0.925F, 2.244F, -2.096F)
          lineToRelative(0.006F, -0.154F)
          verticalLineToRelative(-6.5F)
          curveTo(20.5F, 4.336F, 20.836F, 4.0F, 21.25F, 4.0F)
          close()        
      }
    }
    return _arrowEnterLeft24!!
  }

private var _arrowEnterLeft24: ImageVector? = null
